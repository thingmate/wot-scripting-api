import { DeepPartial } from '@lirx/utils';
import { ThingDescription } from 'wot-thing-description-types';
import {
  InferThingActionFromName,
  InferThingActionNames,
  InferThingActions,
  IThingConfigActionsConstraint,
} from './action/config/thing-config-actions.type';
import {
  InferThingEventFromName,
  InferThingEventNames,
  InferThingEvents,
  IThingConfigEventsConstraint,
} from './event/config/thing-config-events.type';
import {
  InferThingProperties,
  InferThingPropertyFromName,
  InferThingPropertyNames,
  IThingConfigPropertiesConstraint,
} from './property/config/thing-config-properties.type';

export type IThingDescription = DeepPartial<ThingDescription>;

export type IThingConfigConstraint<GThingConfig> =
  IThingConfigPropertiesConstraint<GThingConfig>
  & IThingConfigActionsConstraint<GThingConfig>
  & IThingConfigEventsConstraint<GThingConfig>
  ;

export interface IThingInitDescriptionOptions {
  description?: IThingDescription;
}

export type IThingInitOptions<GConfig extends IThingConfigConstraint<GConfig>> =
  GConfig
  & IThingInitDescriptionOptions;

export class Thing<GConfig extends IThingConfigConstraint<GConfig>> {
  readonly #description: IThingDescription;
  readonly #properties: InferThingProperties<GConfig>;
  readonly #actions: InferThingActions<GConfig>;
  readonly #events: InferThingEvents<GConfig>;

  constructor(
    {
      description = {},
      properties = {},
      actions = {},
      events = {},
    }: IThingInitOptions<GConfig>,
  ) {
    this.#description = description;
    this.#properties = properties;
    this.#actions = actions;
    this.#events = events;
  }

  get description(): IThingDescription {
    return this.#description;
  }

  getProperty<GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferThingPropertyFromName<GConfig, GName> {
    if (name in this.#properties!) {
      return this.#properties![name] as InferThingPropertyFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing property '${name}'.`);
    }
  }

  getAction<GName extends InferThingActionNames<GConfig>>(
    name: GName,
  ): InferThingActionFromName<GConfig, GName> {
    if (name in this.#actions!) {
      return this.#actions![name] as InferThingActionFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing action '${name}'.`);
    }
  }

  getEvent<GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferThingEventFromName<GConfig, GName> {
    if (name in this.#events!) {
      return this.#events![name] as InferThingEventFromName<GConfig, GName>;
    } else {
      throw new Error(`Missing event '${name}'.`);
    }
  }
}

export type IGenericThing = Thing<any>;
