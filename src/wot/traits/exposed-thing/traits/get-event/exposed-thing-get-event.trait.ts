import { IThingConfigEvents } from '../../../thing/types/thing-events-config.type';
import { IExposedThingGetEventFunction } from './exposed-thing-get-event.function-definition';

export interface IExposedThingGetEventTrait<GConfig extends IThingConfigEvents> {
  getEvent: IExposedThingGetEventFunction<GConfig>;
}
