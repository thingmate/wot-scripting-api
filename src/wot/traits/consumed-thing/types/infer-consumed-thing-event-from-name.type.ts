import { InferThingEventNames, InferThingEventValueFromName, IThingConfigEvents } from '../../thing/types/thing-events-config.type';
import { IConsumedThingEvent } from '../components/event/consumed-thing-event.trait-collection';

export type InferConsumedThingEventFromName<GConfig extends IThingConfigEvents, GName extends InferThingEventNames<GConfig>> =
  IConsumedThingEvent<GName, InferThingEventValueFromName<GConfig, GName>>;
