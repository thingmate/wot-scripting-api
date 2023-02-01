import { EventElement } from 'wot-thing-description-types';
import { ConsumedThing, DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IPromise } from '@lirx/promise';
import { IConsumedThingObserver } from '../../observer/comsumed-thing-observer.trait-collection';
import {
  createConsumedThingObserverFromNativeConsumedThing,
} from '../../observer/implementations/create-consumed-thing-observer-from-native-consumed-thing';
import { IConsumedThingEvent } from '../comsumed-thing-event.trait-collection';
import { IConsumedThingEventObserveOptions } from '../traits/observe/consumed-thing-event-observe.function-definition';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingevent

export function createConsumedThingEventFromNativeConsumedThing<GValue extends DataSchemaValue>(
  thing: ConsumedThing,
  name: string,
): IConsumedThingEvent<GValue> {

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

  // TODO handle the case where we call again observe
  const observe = (
    options?: IConsumedThingEventObserveOptions,
  ): IPromise<IConsumedThingObserver<GValue>> => {
    return createConsumedThingObserverFromNativeConsumedThing(
      thing,
      name,
      'event',
      options,
    );
  };

  return {
    getName,
    getDescription,
    observe,
  };
}
