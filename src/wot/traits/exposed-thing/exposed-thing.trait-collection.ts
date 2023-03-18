import { IThingConfig } from '../thing/types/thing-config.type';
import { IExposedThingExposeTrait } from './traits/expose/exposed-thing-expose.trait';
import { IExposedThingGetActionTrait } from './traits/get-action/exposed-thing-get-action.trait';
import { IExposedThingGetDescriptionTrait } from './traits/get-description/exposed-thing-get-description.trait';
import { IExposedThingGetEventTrait } from './traits/get-event/exposed-thing-get-event.trait';
import { IExposedThingGetPropertyTrait } from './traits/get-property/exposed-thing-get-property.trait';

export interface IExposedThing<GConfig extends IThingConfig> extends // traits
  IExposedThingGetDescriptionTrait,
  IExposedThingGetPropertyTrait<GConfig>,
  IExposedThingGetActionTrait<GConfig>,
  IExposedThingGetEventTrait<GConfig>,
  IExposedThingExposeTrait
//
{

}
