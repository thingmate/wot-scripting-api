import { Abortable, AsyncTask, IAsyncTaskFactory, IAsyncTaskInput } from '@lirx/async-task';
import { ActionElement, EventElement, PropertyElement } from 'wot-thing-description-types';
import { ExposedThingInit } from 'wot-typescript-definitions';
import { IExposedThingBuilder } from '../../../traits/exposed-thing-builder/exposed-thing-builder.trait-collection';
import {
  IExposedThingBuilderAddActionHandler,
} from '../../../traits/exposed-thing-builder/traits/add-action/exposed-thing-builder-add-action.function-definition';
import {
  IExposedThingBuilderAddEventHandler,
} from '../../../traits/exposed-thing-builder/traits/add-event/exposed-thing-builder-add-event.function-definition';
import {
  IExposedThingBuilderAddPropertyHandler,
} from '../../../traits/exposed-thing-builder/traits/add-property/exposed-thing-builder-add-property.function-definition';
import {
  IProducedThingBuilderProduceFunctionOptions,
} from '../../../traits/exposed-thing-builder/traits/produce/exposed-thing-builder-produce.function-definition';
import { IExposedThing } from '../../../traits/exposed-thing/exposed-thing.trait-collection';
import { InferThingActionNames } from '../../../traits/thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../traits/thing/types/thing-config.type';
import { InferThingEventNames } from '../../../traits/thing/types/thing-events-config.type';
import { InferThingPropertyNames } from '../../../traits/thing/types/thing-properties-config.type';

interface IOnProducedFunction<GConfig extends IThingConfig> {
  (
    thing: IExposedThing<GConfig>,
    abortable: Abortable,
  ): IAsyncTaskInput<void>;
}

export interface ICreateExposedThingBuilderProduceFunction<GConfig extends IThingConfig> {
  (
    td: ExposedThingInit,
    options?: IProducedThingBuilderProduceFunctionOptions,
  ): AsyncTask<IExposedThing<GConfig>>;
}

export function createExposedThingBuilder<GConfig extends IThingConfig>(
  _produce: ICreateExposedThingBuilderProduceFunction<GConfig>,
  td: ExposedThingInit = {},
): IExposedThingBuilder<GConfig> {
  const onProduced: IOnProducedFunction<GConfig>[] = [];

  const getDescription = (): ExposedThingInit => {
    return td;
  };

  const addProperty = <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
    options: DeepPartial<PropertyElement>,
    handler: IExposedThingBuilderAddPropertyHandler<GConfig, GName>,
  ): void => {
    if (td.properties === void 0) {
      td.properties = {};
    }

    if (name in td.properties) {
      throw new Error(`Property already registered`);
    } else {
      td.properties[name] = options;
      onProduced.push((
        thing: IExposedThing<GConfig>,
        abortable: Abortable,
      ): IAsyncTaskInput<void> => {
        return handler(thing.getProperty(name), thing, abortable);
      });
    }
  };

  const addAction = <GName extends InferThingActionNames<GConfig>>(
    name: GName,
    options: DeepPartial<ActionElement>,
    handler: IExposedThingBuilderAddActionHandler<GConfig, GName>,
  ): void => {
    if (td.actions === void 0) {
      td.actions = {};
    }

    if (name in td.actions) {
      throw new Error(`Action already registered`);
    } else {
      td.actions[name] = options;
      onProduced.push((
        thing: IExposedThing<GConfig>,
        abortable: Abortable,
      ): IAsyncTaskInput<void> => {
        return handler(thing.getAction(name), thing, abortable);
      });
    }
  };

  const addEvent = <GName extends InferThingEventNames<GConfig>>(
    name: GName,
    options: DeepPartial<EventElement>,
    handler: IExposedThingBuilderAddEventHandler<GConfig, GName>,
  ): void => {
    if (td.events === void 0) {
      td.events = {};
    }

    if (name in td.events) {
      throw new Error(`Event already registered`);
    } else {
      td.events[name] = options;
      onProduced.push((
        thing: IExposedThing<GConfig>,
        abortable: Abortable,
      ): IAsyncTaskInput<void> => {
        return handler(thing.getEvent(name), thing, abortable);
      });
    }
  };

  const produce = (
    options?: IProducedThingBuilderProduceFunctionOptions,
  ): AsyncTask<IExposedThing<GConfig>> => {
    return _produce(td, options)
      .successful((
        thing: IExposedThing<GConfig>,
        abortable: Abortable,
      ): AsyncTask<IExposedThing<GConfig>> => {
        return AsyncTask.all<void>(
          onProduced.map((callback: IOnProducedFunction<GConfig>): IAsyncTaskFactory<void> => {
            return (
              abortable: Abortable,
            ): IAsyncTaskInput<void> => {
              return callback(thing, abortable);
            };
          }),
          abortable,
        )
          .successful((): IExposedThing<GConfig> => {
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
