import {
  createErrorNotification,
  createMulticastSource,
  createNextNotification,
  createUnicastReplayLastSource,
  IObservable,
  mapObservable,
  merge,
  shareObservable,
  STATIC_COMPLETE_NOTIFICATION,
  toAsyncIterable,
} from '@lirx/core';
import { IPromise, makePromiseAbortable } from '@lirx/promise';
import { ConsumedThing, DataSchemaValue, InteractionOutput, Subscription } from 'wot-typescript-definitions';
import { IConsumedThingPropertyObserveOptions } from '../../property/traits/observe/consumed-thing-property-observe.function-definition';
import { IConsumedThingObserver } from '../comsumed-thing-observer.trait-collection';
import { IConsumedThingObserverStopOptions } from '../traits/stop/consumed-thing-observer-stop.function-definition';
import { IConsumedThingObserverNotifications } from '../traits/to-observable/consumed-thing-observer-to-observable.function-definition';
import { consumedThingObserverModeToMethodeName, IConsumedThingObserverMode } from './consumed-thing-observer-mode';

export function createConsumedThingObserverFromNativeConsumedThing<GValue extends DataSchemaValue>(
  thing: ConsumedThing,
  name: string,
  mode: IConsumedThingObserverMode,
  options?: IConsumedThingPropertyObserveOptions,
): IPromise<IConsumedThingObserver<GValue>> {
  const {
    emit: $value,
    subscribe: value$,
  } = createMulticastSource<GValue>();

  const {
    emit: $error,
    subscribe: error$,
  } = createMulticastSource<any>();

  const {
    emit: $stop,
    subscribe: stop$,
  } = createUnicastReplayLastSource<void>();

  const observable$ = shareObservable(
    merge([
      mapObservable(value$, createNextNotification),
      mapObservable(error$, createErrorNotification),
      mapObservable(stop$, () => STATIC_COMPLETE_NOTIFICATION),
    ]),
  );

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
  )
    .then((subscription: Subscription): IConsumedThingObserver<GValue> => {
      const isActive = (): boolean => {
        return subscription.active;
      };

      const stop = (
        options?: IConsumedThingObserverStopOptions,
      ): IPromise<void> => {
        return makePromiseAbortable<void>(subscription.stop(options), options)
          .then($stop);
      };

      const toObservable = (): IObservable<IConsumedThingObserverNotifications<GValue>> => {
        return observable$;
      };

      const _toAsyncIterable = (): AsyncIterableIterator<GValue> => {
        return toAsyncIterable<GValue>(observable$);
      };

      return {
        onValue: value$,
        onError: error$,
        isActive,
        stop,
        toObservable,
        [Symbol.asyncIterator]: _toAsyncIterable,
      };
    });
}
