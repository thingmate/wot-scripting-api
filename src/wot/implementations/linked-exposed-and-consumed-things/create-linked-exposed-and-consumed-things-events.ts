import { AsyncTask, IAsyncTaskConstraint, IAsyncTaskInput, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { createMulticastSource } from '@lirx/core';
import { EventElement } from 'wot-thing-description-types';
import { DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingEvent } from '../../traits/consumed-thing/components/event/consumed-thing-event.trait-collection';
import {
  IConsumedThingEventObserveOptions,
} from '../../traits/consumed-thing/components/event/traits/observe/consumed-thing-event-observe.function-definition';
import { IConsumedThingObserver } from '../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import { IExposedThingEvent } from '../../traits/exposed-thing/components/event/exposed-thing-event.trait-collection';
import {
  IExposedThingEventOnSubscribeFunctionHandler,
  IExposedThingEventOnSubscribeFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/event/traits/on-subscribe/exposed-thing-event-on-subscribe.function-definition';
import {
  IExposedThingEventOnUnsubscribeFunctionHandler,
  IExposedThingEventOnUnsubscribeFunctionHandlerOptions,
} from '../../traits/exposed-thing/components/event/traits/on-unsubscribe/exposed-thing-event-on-unsubscribe.function-definition';
import { createConsumedThingObserver } from '../shared/consumed-thing/components/observer/create-consumed-thing-observer';

export type ILinkedExposedAndConsumedThingsEvents<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> = [
  IExposedThingEvent<GName, GValue>,
  IConsumedThingEvent<GName, GValue>,
];

export type IGenericLinkedExposedAndConsumedThingsEvents = ILinkedExposedAndConsumedThingsEvents<string, DataSchemaValue>;

export function createLinkedExposedAndConsumedThingsEvents<GName extends string, GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>>(
  td: ThingDescription,
  name: GName,
): ILinkedExposedAndConsumedThingsEvents<GName, GValue> {

  let eventElement: EventElement;

  if (td.events === void 0) {
    throw new Error(`Missing td.events`);
  }

  if (td.events[name] === void 0) {
    throw new Error(`Missing td.events[${name}]`);
  } else {
    eventElement = td.events[name];
  }

  const getName = (): GName => {
    return name;
  };

  const getDescription = (): EventElement => {
    return eventElement;
  };

  let _onSubscribeHandler: IExposedThingEventOnSubscribeFunctionHandler<GValue> = (
    options: IExposedThingEventOnSubscribeFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void> => {
    return AsyncTask.success(
      void 0,
      optionalAbortableOptionsToAbortable(options),
    );
  };

  let _onUnsubscribeHandler: IExposedThingEventOnUnsubscribeFunctionHandler<GValue> = (
    options: IExposedThingEventOnUnsubscribeFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void> => {
    return AsyncTask.success(
      void 0,
      optionalAbortableOptionsToAbortable(options),
    );
  };

  const {
    emit: $value,
    subscribe: value$,
  } = createMulticastSource<GValue>();

  const {
    emit: $error,
    subscribe: error$,
  } = createMulticastSource<any>();

  const createExposedThingEvent = (): IExposedThingEvent<GName, GValue> => {
    const emit = (
      value: GValue,
    ): void => {
      $value(value);
    };

    const onSubscribe = (
      handler: IExposedThingEventOnSubscribeFunctionHandler<GValue>,
    ): void => {
      _onSubscribeHandler = handler;
    };

    const onUnsubscribe = (
      handler: IExposedThingEventOnUnsubscribeFunctionHandler<GValue>,
    ): void => {
      _onUnsubscribeHandler = handler;
    };

    return {
      getName,
      getDescription,
      emit,
      onSubscribe,
      onUnsubscribe,
    };
  };

  const createConsumedThingEvent = (): IConsumedThingEvent<GName, GValue> => {
    const observe = (
      options?: IConsumedThingEventObserveOptions,
    ): AsyncTask<IConsumedThingObserver<GValue>> => {
      return AsyncTask.fromFactory<IConsumedThingObserver<GValue>>(
        (): IConsumedThingObserver<GValue> => {
          return createConsumedThingObserver({
            value$,
            error$,
          });
        },
        optionalAbortableOptionsToAbortable(options),
      );
    };

    return {
      getName,
      getDescription,
      observe,
    };
  };

  return [
    createExposedThingEvent(),
    createConsumedThingEvent(),
  ];
}
