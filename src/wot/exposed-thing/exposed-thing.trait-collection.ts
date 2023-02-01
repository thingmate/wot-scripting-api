
import { IExposedThingExposeTrait } from './traits/expose/exposed-thing-expose.trait';
import { IExposedThingGetActionTrait } from './traits/get-action/exposed-thing-get-action.trait';
import { IExposedThingGetEventTrait } from './traits/get-event/exposed-thing-get-event.trait';
import { IExposedThingGetPropertyTrait } from './traits/get-property/exposed-thing-get-property.trait';
import { IExposedThingGetDescriptionTrait } from './traits/get-description/exposed-thing-get-description.trait';

export interface IExposedThing extends // traits
  IExposedThingGetDescriptionTrait,
  IExposedThingGetPropertyTrait,
  IExposedThingGetActionTrait,
  IExposedThingGetEventTrait,
  IExposedThingExposeTrait
//
{

}
