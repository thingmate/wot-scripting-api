import { ConsumedThing, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThing } from '../../../../traits/consumed-thing/consumed-thing.trait-collection';
import {
  createCachedConsumedThingGetActionFunction,
} from '../../../../traits/consumed-thing/functions/get-action/create-cached-consumed-thing-get-action-function';
import {
  createCachedConsumedThingGetEventFunction,
} from '../../../../traits/consumed-thing/functions/get-event/create-cached-consumed-thing-get-event-function';
import {
  createCachedConsumedThingGetPropertyFunction,
} from '../../../../traits/consumed-thing/functions/get-property/create-cached-consumed-thing-get-property-function';
import { InferConsumedThingActionFromName } from '../../../../traits/consumed-thing/types/infer-consumed-thing-action-from-name.type';
import { InferConsumedThingEventFromName } from '../../../../traits/consumed-thing/types/infer-consumed-thing-event-from-name.type';
import { InferConsumedThingPropertyFromName } from '../../../../traits/consumed-thing/types/infer-consumed-thing-property-from-name.type';
import {
  InferThingActionNames,
  InferThingActionValueInFromName,
  InferThingActionValueOutFromName,
} from '../../../../traits/thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../../traits/thing/types/thing-config.type';
import { InferThingEventNames, InferThingEventValueFromName } from '../../../../traits/thing/types/thing-events-config.type';
import { InferThingPropertyNames, InferThingPropertyValueFromName } from '../../../../traits/thing/types/thing-properties-config.type';
import {
  createConsumedThingActionFromNativeConsumedThing,
} from './components/action/create-consumed-thing-action-from-native-consumed-thing';
import {
  createConsumedThingEventFromNativeConsumedThing,
} from './components/event/create-consumed-thing-event-from-native-consumed-thing';
import {
  createConsumedThingPropertyFromNativeConsumedThing,
} from './components/property/create-consumed-thing-property-from-native-consumed-thing';

export function createConsumedThingFromNativeConsumedThing<GConfig extends IThingConfig>(
  thing: ConsumedThing,
): IConsumedThing<GConfig> {
  const getDescription = (): ThingDescription => {
    return thing.getThingDescription();
  };

  const getProperty = <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferConsumedThingPropertyFromName<GConfig, GName> => {
    return createConsumedThingPropertyFromNativeConsumedThing<GName, InferThingPropertyValueFromName<GConfig, GName>>(thing, name);
  };

  const getAction = <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferConsumedThingActionFromName<GConfig, GName> => {
    return createConsumedThingActionFromNativeConsumedThing<GName, InferThingActionValueInFromName<GConfig, GName>, InferThingActionValueOutFromName<GConfig, GName>>(thing, name);
  };

  const getEvent = <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferConsumedThingEventFromName<GConfig, GName> => {
    return createConsumedThingEventFromNativeConsumedThing<GName, InferThingEventValueFromName<GConfig, GName>>(thing, name);
  };

  return {
    getDescription,
    getProperty: createCachedConsumedThingGetPropertyFunction<GConfig>(getProperty),
    getAction: createCachedConsumedThingGetActionFunction<GConfig>(getAction),
    getEvent: createCachedConsumedThingGetEventFunction<GConfig>(getEvent),
  };
}



