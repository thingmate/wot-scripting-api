import { InferThingActionFromName, InferThingActionNames } from '../traits/get-action/thing-actions-config.type';
import { InferThingEventFromName, InferThingEventNames } from '../traits/get-event/thing-events-config.type';
import { InferThingPropertyFromName, InferThingPropertyNames } from '../traits/get-property/thing-properties-config.type';
import { IThing } from '../thing.trait-collection';
import { IThingConfig } from '../types/thing-config.type';

export function createThing<GConfig extends IThingConfig>(
  {
    properties = {},
    actions = {},
    events = {},
  }: GConfig,
): IThing<GConfig> {

  const getProperty = <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferThingPropertyFromName<GConfig, GName> => {
    if (name in properties) {
      return properties[name] as InferThingPropertyFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing property '${name}'.`);
    }
  };

  const getAction = <GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferThingActionFromName<GConfig, GName> => {
    if (name in actions) {
      return actions[name] as InferThingActionFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing action '${name}'.`);
    }
  };

  const getEvent = <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferThingEventFromName<GConfig, GName> => {
    if (name in events) {
      return events[name] as InferThingEventFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing event '${name}'.`);
    }
  };

  return {
    getProperty,
    getAction,
    getEvent,
  };
}
