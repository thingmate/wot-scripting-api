import { IThingConfigActions } from '../traits/get-action/thing-actions-config.type';
import { IThingConfigEvents } from '../traits/get-event/thing-events-config.type';
import { IThingConfigProperties } from '../traits/get-property/thing-properties-config.type';

export interface IThingConfig extends //
  IThingConfigProperties,
  IThingConfigActions,
  IThingConfigEvents
//
{
}
