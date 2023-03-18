import { AsyncTask, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { DataSchemaValue, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThing } from '../../traits/consumed-thing/consumed-thing.trait-collection';
import { InferConsumedThingActionFromName } from '../../traits/consumed-thing/types/infer-consumed-thing-action-from-name.type';
import { InferConsumedThingEventFromName } from '../../traits/consumed-thing/types/infer-consumed-thing-event-from-name.type';
import { InferConsumedThingPropertyFromName } from '../../traits/consumed-thing/types/infer-consumed-thing-property-from-name.type';
import { IExposedThing } from '../../traits/exposed-thing/exposed-thing.trait-collection';
import { IExposedThingExposeFunctionOptions } from '../../traits/exposed-thing/traits/expose/exposed-thing-expose.function-definition';
import { InferExposedThingActionFromName } from '../../traits/exposed-thing/types/infer-exposed-thing-action-from-name.type';
import { InferExposedThingEventFromName } from '../../traits/exposed-thing/types/infer-exposed-thing-event-from-name.type';
import { InferExposedThingPropertyFromName } from '../../traits/exposed-thing/types/infer-exposed-thing-property-from-name.type';
import { ILinkedExposedAndConsumedThings } from '../../traits/linked-exposed-and-consumed-things/linked-exposed-and-consumed-things.type';
import { InferThingActionNames, IThingActionInType, IThingActionOutType } from '../../traits/thing/types/thing-actions-config.type';
import { IThingConfig } from '../../traits/thing/types/thing-config.type';
import { InferThingEventNames } from '../../traits/thing/types/thing-events-config.type';
import { InferThingPropertyNames } from '../../traits/thing/types/thing-properties-config.type';
import {
  createLinkedExposedAndConsumedThingsActions,
  IGenericLinkedExposedAndConsumedThingsActions,
} from './create-linked-exposed-and-consumed-things-actions';
import {
  createLinkedExposedAndConsumedThingsEvents,
  IGenericLinkedExposedAndConsumedThingsEvents,
} from './create-linked-exposed-and-consumed-things-events';
import {
  createLinkedExposedAndConsumedThingsProperties,
  IGenericLinkedExposedAndConsumedThingsProperties,
} from './create-linked-exposed-and-consumed-things-properties';

export function createLinkedExposedAndConsumedThings<GConfig extends IThingConfig>(
  td: ThingDescription,
): ILinkedExposedAndConsumedThings<GConfig> {

  const createLinkedExposedAndConsumedThingsPropertiesMap = (): Map<string, IGenericLinkedExposedAndConsumedThingsProperties> => {
    return new Map<string, IGenericLinkedExposedAndConsumedThingsProperties>(
      (td.properties === void 0)
        ? []
        : Object.keys(td.properties)
          .map((name: string): [string, IGenericLinkedExposedAndConsumedThingsProperties] => {
            return [
              name,
              createLinkedExposedAndConsumedThingsProperties<string, DataSchemaValue>(td, name),
            ];
          }),
    );
  };

  const createLinkedExposedAndConsumedThingsActionsMap = (): Map<string, IGenericLinkedExposedAndConsumedThingsActions> => {
    return new Map<string, IGenericLinkedExposedAndConsumedThingsActions>(
      (td.actions === void 0)
        ? []
        : Object.keys(td.actions)
          .map((name: string): [string, IGenericLinkedExposedAndConsumedThingsActions] => {
            return [
              name,
              createLinkedExposedAndConsumedThingsActions<string, IThingActionInType, IThingActionOutType>(td, name),
            ];
          }),
    );
  };

  const createLinkedExposedAndConsumedThingsEventsMap = (): Map<string, IGenericLinkedExposedAndConsumedThingsEvents> => {
    return new Map<string, IGenericLinkedExposedAndConsumedThingsEvents>(
      (td.events === void 0)
        ? []
        : Object.keys(td.events)
          .map((name: string): [string, IGenericLinkedExposedAndConsumedThingsEvents] => {
            return [
              name,
              createLinkedExposedAndConsumedThingsEvents<string, DataSchemaValue>(td, name),
            ];
          }),
    );
  };

  const propertiesMap: Map<string, IGenericLinkedExposedAndConsumedThingsProperties> = createLinkedExposedAndConsumedThingsPropertiesMap();
  const actionsMap: Map<string, IGenericLinkedExposedAndConsumedThingsActions> = createLinkedExposedAndConsumedThingsActionsMap();
  const eventsMap: Map<string, IGenericLinkedExposedAndConsumedThingsEvents> = createLinkedExposedAndConsumedThingsEventsMap();

  const getDescription = (): ThingDescription => {
    return td;
  };

  const createExposedThing = (): IExposedThing<GConfig> => {
    const getProperty = <GName extends InferThingPropertyNames<GConfig>>(
      name: GName,
    ): InferExposedThingPropertyFromName<GConfig, GName> => {
      if (propertiesMap.has(name)) {
        return propertiesMap.get(name)![0] as unknown as InferExposedThingPropertyFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown property "${name}"`);
      }
    };

    const getAction = <GName extends InferThingActionNames<GConfig>>(
      name: GName,
    ): InferExposedThingActionFromName<GConfig, GName> => {
      if (actionsMap.has(name)) {
        return actionsMap.get(name)![0] as unknown as InferExposedThingActionFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown action "${name}"`);
      }
    };

    const getEvent = <GName extends InferThingEventNames<GConfig>>(
      name: GName,
    ): InferExposedThingEventFromName<GConfig, GName> => {
      if (eventsMap.has(name)) {
        return eventsMap.get(name)![0] as unknown as InferExposedThingEventFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown action "${name}"`);
      }
    };

    const expose = (
      options?: IExposedThingExposeFunctionOptions,
    ): AsyncTask<void> => {
      return AsyncTask.from(
        void 0,
        optionalAbortableOptionsToAbortable(options),
      );
    };

    return {
      getDescription,
      getProperty,
      getAction,
      getEvent,
      expose,
    };
  };

  const createConsumedThing = (): IConsumedThing<GConfig> => {
    const getProperty = <GName extends InferThingPropertyNames<GConfig>>(
      name: GName,
    ): InferConsumedThingPropertyFromName<GConfig, GName> => {
      if (propertiesMap.has(name)) {
        return propertiesMap.get(name)![1] as unknown as InferConsumedThingPropertyFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown property "${name}"`);
      }
    };

    const getAction = <GName extends InferThingActionNames<GConfig>>(
      name: GName,
    ): InferConsumedThingActionFromName<GConfig, GName> => {
      if (actionsMap.has(name)) {
        return actionsMap.get(name)![1] as unknown as InferConsumedThingActionFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown property "${name}"`);
      }
    };

    const getEvent = <GName extends InferThingEventNames<GConfig>>(
      name: GName,
    ): InferConsumedThingEventFromName<GConfig, GName> => {
      if (eventsMap.has(name)) {
        return eventsMap.get(name)![1] as unknown as InferConsumedThingEventFromName<GConfig, GName>;
      } else {
        throw new Error(`Unknown property "${name}"`);
      }
    };

    return {
      getDescription,
      getProperty,
      getAction,
      getEvent,
    };
  };

  return [
    createExposedThing(),
    createConsumedThing(),
  ];
}
