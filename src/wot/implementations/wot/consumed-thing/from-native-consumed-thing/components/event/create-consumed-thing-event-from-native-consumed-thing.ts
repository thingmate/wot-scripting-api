import { AsyncTask } from '@lirx/async-task';
import { EventElement } from 'wot-thing-description-types';
import { ConsumedThing, DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingEvent } from '../../../../../../traits/consumed-thing/components/event/consumed-thing-event.trait-collection';
import {
  IConsumedThingEventObserveOptions,
} from '../../../../../../traits/consumed-thing/components/event/traits/observe/consumed-thing-event-observe.function-definition';
import {
  IConsumedThingObserver,
} from '../../../../../../traits/consumed-thing/components/observer/consumed-thing-observer.trait-collection';
import { createConsumedThingObserverFromNativeConsumedThing } from '../observer/create-consumed-thing-observer-from-native-consumed-thing';

// https://www.w3.org/TR/2018/WD-wot-scripting-api-20181129/#dom-thingevent

export function createConsumedThingEventFromNativeConsumedThing<GName extends string, GValue extends DataSchemaValue>(
  thing: ConsumedThing,
  name: GName,
): IConsumedThingEvent<GName, GValue> {

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

  const getName = (): GName => {
    return name;
  };

  const getDescription = (): EventElement => {
    return eventElement;
  };

  // TODO handle the case where we call again observe
  const observe = (
    options?: IConsumedThingEventObserveOptions,
  ): AsyncTask<IConsumedThingObserver<GValue>> => {
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
