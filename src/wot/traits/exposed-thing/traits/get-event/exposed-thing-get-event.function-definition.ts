import { InferThingEventNames, IThingConfigEvents } from '../../../thing/types/thing-events-config.type';
import { InferExposedThingEventFromName } from '../../types/infer-exposed-thing-event-from-name.type';

export interface IExposedThingGetEventFunction<GConfig extends IThingConfigEvents> {
  <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferExposedThingEventFromName<GConfig, GName>;
}
