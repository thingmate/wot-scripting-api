import { InferThingEventNames, IThingConfigEvents } from '../../../thing/types/thing-events-config.type';
import { InferConsumedThingEventFromName } from '../../types/infer-consumed-thing-event-from-name.type';

export interface IConsumedThingGetEventFunction<GConfig extends IThingConfigEvents> {
  <GName extends InferThingEventNames<GConfig>>(
    name: GName,
  ): InferConsumedThingEventFromName<GConfig, GName>;
}
