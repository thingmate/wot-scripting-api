import { IPromiseLikeOrValue } from '@lirx/promise';
import { EventElement } from 'wot-thing-description-types';
import { DataSchemaValue, ExposedThing, InteractionOptions, ThingDescription } from 'wot-typescript-definitions';
import { IExposedThingEvent } from '../exposed-thing-event.trait-collection';
import { IExposedThingEventOnSubscribeFunctionHandler } from '../traits/on-subscribe/exposed-thing-event-on-subscribe.function-definition';
import {
  IExposedThingEventOnUnsubscribeFunctionHandler,
} from '../traits/on-unsubscribe/exposed-thing-event-on-unsubscribe.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingevent

export function createExposedThingEventFromNativeExposedThing<GValue extends DataSchemaValue>(
  thing: ExposedThing,
  name: string,
): IExposedThingEvent<GValue> {

  const td: ThingDescription = thing.getThingDescription();

  let eventElement: EventElement;

  if (td.events === void 0) {
    throw new Error(`Missing td.events`);
  }

  if (td.events[name] === void 0) {
    throw new Error(`Missing td.events[${name}]`);
  } else {
    eventElement = td.events[name];
  }

  const getName = (): string => {
    return name;
  };

  const getDescription = (): EventElement => {
    return eventElement;
  };

  const emit = (
    value: GValue,
  ): void => {
    thing.emitEvent(name, value);
  };

  const onSubscribe = (
    handler: IExposedThingEventOnSubscribeFunctionHandler<GValue>,
  ): void => {
    thing.setEventSubscribeHandler(name, (options?: InteractionOptions): Promise<void> => {
      return new Promise<void>((
        resolve: (value: IPromiseLikeOrValue<void>) => void,
      ): void => {
        resolve(handler(options));
      });
    });
  };

  const onUnsubscribe = (
    handler: IExposedThingEventOnUnsubscribeFunctionHandler<GValue>,
  ): void => {
    thing.setEventUnsubscribeHandler(name, (options?: InteractionOptions): Promise<void> => {
      return new Promise<void>((
        resolve: (value: IPromiseLikeOrValue<void>) => void,
      ): void => {
        resolve(handler(options));
      });
    });
  };

  // const onEvent = (
  //   handler: IExposedThingEventOnSubscribeFunctionHandler<GValue>,
  // ): void => {
  //   thing.setEventHandler(name, (): Promise<InteractionInput> => {
  //     return new Promise<InteractionInput>((
  //       resolve: (value: IPromiseLikeOrValue<InteractionInput>) => void,
  //     ): void => {
  //       resolve(handler());
  //     });
  //   });
  // };

  return {
    getName,
    getDescription,
    emit,
    onSubscribe,
    onUnsubscribe,
  };
}
