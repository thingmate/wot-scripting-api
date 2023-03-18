import { DataSchemaValue } from 'wot-typescript-definitions';

export type IThingEventsConfig = Record<string, DataSchemaValue>;

export interface IThingConfigEvents {
  events?: IThingEventsConfig;
}

export type InferThingEvents<GConfig extends IThingConfigEvents> =
  GConfig['events'] extends undefined
    ? {}
    : GConfig['events'];

export type InferThingEventNames<GConfig extends IThingConfigEvents> =
  Extract<keyof InferThingEvents<GConfig>, string>;

export type InferThingEventValueFromName<GConfig extends IThingConfigEvents, GName extends InferThingEventNames<GConfig>> =
  InferThingEvents<GConfig>[GName] extends DataSchemaValue
    ? InferThingEvents<GConfig>[GName]
    : never;

