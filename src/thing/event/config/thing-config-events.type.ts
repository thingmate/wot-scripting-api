import { IRecordConstraint } from '../../../misc/record-constraint.type';
import { IGenericThingEvent } from '../thing-event.class';

export type IThingConfigEventsConstraint<GConfig> =
  [GConfig] extends [{ events: infer GThingConfigEvents }]
    ? { events: IRecordConstraint<GThingConfigEvents, string, IGenericThingEvent> }
    : { events?: void | undefined }
  ;

export type InferThingEvents<GConfig extends IThingConfigEventsConstraint<GConfig>> =
  GConfig['events'] extends undefined
    ? {}
    : GConfig['events'];

export type InferThingEventNames<GConfig extends IThingConfigEventsConstraint<GConfig>> =
  Extract<keyof InferThingEvents<GConfig>, string>;

export type InferThingEventFromName<GConfig extends IThingConfigEventsConstraint<GConfig>, GName extends InferThingEventNames<GConfig>> =
  InferThingEvents<GConfig>[GName];

