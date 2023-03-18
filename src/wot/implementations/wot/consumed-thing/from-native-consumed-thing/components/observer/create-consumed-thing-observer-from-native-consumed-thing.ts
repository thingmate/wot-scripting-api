import { Abortable, AsyncTask, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { createMulticastSource } from '@lirx/core';
import { ConsumedThing, DataSchemaValue, InteractionOutput, Subscription } from 'wot-typescript-definitions';
import {
  IConsumedThingObserver,
} from '../../../../../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import {
  IConsumedThingObserverStopOptions,
} from '../../../../../../traits/consumed-thing/components/observer/traits/stop/consumed-thing-observer-stop.function-definition';
import {
  IConsumedThingPropertyObserveOptions,
} from '../../../../../../traits/consumed-thing/components/property/traits/observe/consumed-thing-property-observe.function-definition';
import { createConsumedThingObserver } from '../../../../../shared/consumed-thing/components/observer/create-consumed-thing-observer';
import { consumedThingObserverModeToMethodeName, IConsumedThingObserverMode } from './consumed-thing-observer-mode';

export function createConsumedThingObserverFromNativeConsumedThing<GValue extends DataSchemaValue>(
  thing: ConsumedThing,
  name: string,
  mode: IConsumedThingObserverMode,
  options?: IConsumedThingPropertyObserveOptions,
): AsyncTask<IConsumedThingObserver<GValue>> {
  const {
    emit: $value,
    subscribe: value$,
  } = createMulticastSource<GValue>();

  const {
    emit: $error,
    subscribe: error$,
  } = createMulticastSource<any>();

  return AsyncTask.fromFactory<Subscription>(
    (): Promise<Subscription> => {
      return (thing[consumedThingObserverModeToMethodeName(mode)] as ConsumedThing['observeProperty'])(
        name,
        (data: InteractionOutput): void => {
          data.value()
            .then(
              $value as (value: DataSchemaValue) => void,
              $error,
            );
        },
        $error,
        options,
      );
    },
    optionalAbortableOptionsToAbortable(options),
  )
    .successful((
      subscription: Subscription,
    ): IConsumedThingObserver<GValue> => {
      const {
        isActive: _isActive,
        stop: _stop,
        ...observer
      } = createConsumedThingObserver<GValue>({
        value$,
        error$,
      });

      const isActive = (): boolean => {
        return subscription.active
          && _isActive();
      };

      const stop = (
        options?: IConsumedThingObserverStopOptions,
      ): AsyncTask<void> => {
        return AsyncTask.fromFactory<void>(
          (): Promise<void> => {
            return subscription.stop(options);
          },
          optionalAbortableOptionsToAbortable(options),
        )
          .successful((_, abortable: Abortable): AsyncTask<void> => {
            return _stop({
              ...options,
              abortable,
            });
          });
      };

      return {
        ...observer,
        isActive,
        stop,
      };
    });
}
