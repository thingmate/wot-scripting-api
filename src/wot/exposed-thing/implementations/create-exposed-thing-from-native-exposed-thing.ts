import { ExposedThing, DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IExposedThingAction } from '../components/action/exposed-thing-action.trait-collection';
import {
  createExposedThingActionFromNativeExposedThing
} from '../components/action/implementations/create-exposed-thing-action-from-native-consumed-thing';
import { IExposedThingEvent } from '../components/event/exposed-thing-event.trait-collection';
import {
  createExposedThingEventFromNativeExposedThing
} from '../components/event/implementations/create-exposed-thing-event-from-native-consumed-thing';
import { IExposedThingProperty } from '../components/property/esposed-thing-property.trait-collection';
import {
  createExposedThingPropertyFromNativeExposedThing
} from '../components/property/implementations/create-consumed-thing-property-from-native-consumed-thing';
import { IExposedThing } from '../exposed-thing.trait-collection';

export function createExposedThingFromNativeExposedThing(
  thing: ExposedThing,
): IExposedThing {
  const getDescription = (): ThingDescription => {
    return thing.getThingDescription();
  };

  const getProperty = <GValue extends DataSchemaValue>(
    name: string,
  ): IExposedThingProperty<GValue> => {
    return createExposedThingPropertyFromNativeExposedThing<GValue>(thing, name);
  };

  const getAction = <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
  ): IExposedThingAction<GIn, GOut> => {
    return createExposedThingActionFromNativeExposedThing<GIn, GOut>(thing, name);
  };
  //
  const getEvent = <GValue extends DataSchemaValue>(
    name: string,
  ): IExposedThingEvent<GValue> => {
    return createExposedThingEventFromNativeExposedThing<GValue>(thing, name);
  };

  const expose = (): Promise<void> => {
    return thing.expose();
  };

  return {
    getDescription,
    getProperty,
    getAction,
    getEvent,
    expose,
  };
}
