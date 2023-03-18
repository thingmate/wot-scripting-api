import { InferThingEventNames, InferThingEventValueFromName, IThingConfigEvents } from '../../thing/types/thing-events-config.type';
import { IExposedThingEvent } from '../components/event/exposed-thing-event.trait-collection';

export type InferExposedThingEventFromName<GConfig extends IThingConfigEvents, GName extends InferThingEventNames<GConfig>> =
  IExposedThingEvent<GName, InferThingEventValueFromName<GConfig, GName>>;
