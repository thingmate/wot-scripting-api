import { IThingConfigActions } from './thing-actions-config.type';
import { IThingConfigEvents } from './thing-events-config.type';
import { IThingConfigProperties } from './thing-properties-config.type';

export interface IThingConfig extends IThingConfigProperties, IThingConfigEvents, IThingConfigActions {
}
