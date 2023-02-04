import { IPromiseLikeOrValue } from '@lirx/promise';
import { EventElement, PropertyElement } from 'wot-thing-description-types';
import { DataSchemaValue, ExposedThingInit } from 'wot-typescript-definitions';
import { IWoT } from '../../../types/wot.type';
import { IExposedThing } from '../../exposed-thing.trait-collection';
import { createExposedThingFromThingDescription } from '../../implementations/create-exposed-thing-from-thing-description';
import { IExposedThingBuilder } from '../exposed-thing-builder.trait-collection';
import { IExposedThingBuilderAddActionHandler } from '../traits/add-action/exposed-thing-builder-add-action.function-definition';
import { IExposedThingBuilderAddEventHandler } from '../traits/add-event/exposed-thing-builder-add-event.function-definition';
import { IExposedThingBuilderAddPropertyHandler } from '../traits/add-property/exposed-thing-builder-add-property.function-definition';

interface IOnProducedFunction {
  (
    thing: IExposedThing,
  ): IPromiseLikeOrValue<void>;
}

export function createExposedThingBuilder(
  td: ExposedThingInit = {},
): IExposedThingBuilder {
  const onProduced: IOnProducedFunction[] = [];

  const getDescription = (): ExposedThingInit => {
    return td;
  };

  const addProperty = <GValue extends DataSchemaValue>(
    name: string,
    options: DeepPartial<PropertyElement>,
    handler: IExposedThingBuilderAddPropertyHandler<GValue>,
  ): void => {
    if (td.properties === void 0) {
      td.properties = {};
    }

    if (name in td.properties) {
      throw new Error(`Property already registered`);
    } else {
      td.properties[name] = options;
      onProduced.push((thing: IExposedThing): IPromiseLikeOrValue<void> => {
        return handler(thing.getProperty(name));
      });
    }
  };

  const addAction = <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
    options: DeepPartial<EventElement>,
    handler: IExposedThingBuilderAddActionHandler<GIn, GOut>,
  ): void => {
    if (td.actions === void 0) {
      td.actions = {};
    }

    if (name in td.actions) {
      throw new Error(`Action already registered`);
    } else {
      td.actions[name] = options;
      onProduced.push((thing: IExposedThing): IPromiseLikeOrValue<void> => {
        return handler(thing.getAction(name));
      });
    }
  };

  const addEvent = <GValue extends DataSchemaValue>(
    name: string,
    options: DeepPartial<EventElement>,
    handler: IExposedThingBuilderAddEventHandler<GValue>,
  ): void => {
    if (td.events === void 0) {
      td.events = {};
    }

    if (name in td.events) {
      throw new Error(`Event already registered`);
    } else {
      td.events[name] = options;
      onProduced.push((thing: IExposedThing): IPromiseLikeOrValue<void> => {
        return handler(thing.getEvent(name));
      });
    }
  };

  const produce = (
    WoT: IWoT,
  ): Promise<IExposedThing> => {
    return createExposedThingFromThingDescription(WoT, td)
      .then((thing: IExposedThing): Promise<IExposedThing> => {
        return Promise.all(
          onProduced.map((callback: IOnProducedFunction): IPromiseLikeOrValue<void> => {
            return callback(thing);
          }),
        )
          .then((): IExposedThing => {
            return thing;
          });
      });
  };

  return {
    getDescription,
    addProperty,
    addAction,
    addEvent,
    produce,
  };
}
