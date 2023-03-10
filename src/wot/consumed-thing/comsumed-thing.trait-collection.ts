import { IConsumedThingGetActionTrait } from './traits/get-action/consumed-thing-get-action.trait';
import { IConsumedThingGetDescriptionTrait } from './traits/get-description/consumed-thing-get-description.trait';
import { IConsumedThingGetEventTrait } from './traits/get-event/consumed-thing-get-event.trait';
import { IConsumedThingGetPropertyTrait } from './traits/get-property/consumed-thing-get-property.trait';

export interface IConsumedThing extends // traits
  IConsumedThingGetDescriptionTrait,
  IConsumedThingGetPropertyTrait,
  IConsumedThingGetActionTrait,
  IConsumedThingGetEventTrait
//
{

}
