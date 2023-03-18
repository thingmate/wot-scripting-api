import { IThingConfigEvents } from '../../../thing/types/thing-events-config.type';
import { IConsumedThingGetEventFunction } from './consumed-thing-get-event.function-definition';

export interface IConsumedThingGetEventTrait<GConfig extends IThingConfigEvents> {
  getEvent: IConsumedThingGetEventFunction<GConfig>;
}
