import { IGenericThingEvent } from '../../components/event/thing-event.trait-collection';

export type IThingEventsConfig = Record<string, IGenericThingEvent>;

export interface IThingConfigEvents {
  events?: IThingEventsConfig;
}

export type InferThingEvents<GConfig extends IThingConfigEvents> =
  GConfig['events'] extends undefined
    ? {}
    : GConfig['events'];

export type InferThingEventNames<GConfig extends IThingConfigEvents> =
  Extract<keyof InferThingEvents<GConfig>, string>;

export type InferThingEventFromName<GConfig extends IThingConfigEvents, GName extends InferThingEventNames<GConfig>> =
  InferThingEvents<GConfig>[GName];

