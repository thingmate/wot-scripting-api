import { ConsumedThing, DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThingAction } from '../components/action/comsumed-thing-action.trait-collection';
import {
  createConsumedThingActionFromNativeConsumedThing,
} from '../components/action/implementations/create-consumed-thing-action-from-native-consumed-thing';
import { IConsumedThingEvent } from '../components/event/comsumed-thing-event.trait-collection';
import {
  createConsumedThingEventFromNativeConsumedThing,
} from '../components/event/implementations/create-consumed-thing-event-from-native-consumed-thing';

import { IConsumedThingProperty } from '../components/property/comsumed-thing-property.trait-collection';
import {
  createConsumedThingPropertyFromNativeConsumedThing,
} from '../components/property/implementations/create-consumed-thing-property-from-native-consumed-thing';
import { IConsumedThing } from '../comsumed-thing.trait-collection';

export function createConsumedThingFromNativeConsumedThing(
  thing: ConsumedThing,
): IConsumedThing {
  const getDescription = (): ThingDescription => {
    return thing.getThingDescription();
  };

  const properties = new Map<string, IConsumedThingProperty<any>>();
  const getProperty = <GValue extends DataSchemaValue>(
    name: string,
  ): IConsumedThingProperty<GValue> => {
    let property: IConsumedThingProperty<any> | undefined = properties.get(name);
    if (property === void 0) {
      property = createConsumedThingPropertyFromNativeConsumedThing<GValue>(thing, name);
      properties.set(name, property);
    }
    return property;
  };

  const actions = new Map<string, IConsumedThingAction<any, any>>();
  const getAction = <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
  ): IConsumedThingAction<GIn, GOut> => {
    let action: IConsumedThingAction<any, any> | undefined = actions.get(name);
    if (action === void 0) {
      action = createConsumedThingActionFromNativeConsumedThing<GIn, GOut>(thing, name);
      actions.set(name, action);
    }
    return action;
  };

  const events = new Map<string, IConsumedThingEvent<any>>();
  const getEvent = <GValue extends DataSchemaValue>(
    name: string,
  ): IConsumedThingEvent<GValue> => {
    let event: IConsumedThingEvent<any> | undefined = events.get(name);
    if (event === void 0) {
      event = createConsumedThingEventFromNativeConsumedThing<GValue>(thing, name);
      events.set(name, event);
    }
    return event;
  };

  return {
    getDescription,
    getProperty,
    getAction,
    getEvent,
  };
}
