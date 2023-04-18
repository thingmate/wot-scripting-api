import { InferThingEventFromName, InferThingEventNames, IThingConfigEvents } from './thing-events-config.type';

export interface IThingGetEventFunction<GConfig extends IThingConfigEvents> {
  <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferThingEventFromName<GConfig, GName>;
}
