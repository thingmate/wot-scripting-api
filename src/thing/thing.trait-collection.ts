import { IThingGetActionTrait } from './traits/get-action/thing-get-action.trait';
import { IThingGetEventTrait } from './traits/get-event/thing-get-event.trait';
import { IThingGetPropertyTrait } from './traits/get-property/thing-get-property.trait';
import { IThingConfig } from './types/thing-config.type';

export interface IThing<GConfig extends IThingConfig> extends // traits
  IThingGetPropertyTrait<GConfig>,
  IThingGetActionTrait<GConfig>,
  IThingGetEventTrait<GConfig>
//
{

}
