import { IThingConfigEvents } from './thing-events-config.type';
import { IThingGetEventFunction } from './thing-get-event.function-definition';

export interface IThingGetEventTrait<GConfig extends IThingConfigEvents> {
  getEvent: IThingGetEventFunction<GConfig>;
}
