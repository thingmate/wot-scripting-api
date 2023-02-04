import { IExposedThingBuilderAddActionTrait } from './traits/add-action/exposed-thing-builder-add-action.trait';
import { IExposedThingBuilderGetDescriptionTrait } from './traits/get-description/exposed-thing-builder-get-description.trait';
import { IExposedThingBuilderAddEventTrait } from './traits/add-event/exposed-thing-builder-add-event.trait';
import { IExposedThingBuilderAddPropertyTrait } from './traits/add-property/exposed-thing-builder-add-property.trait';
import { IProducedThingBuilderProduceTrait } from './traits/produce/exposed-thing-builder-produce.trait';

export interface IExposedThingBuilder extends // traits
  IExposedThingBuilderGetDescriptionTrait,
  IExposedThingBuilderAddPropertyTrait,
  IExposedThingBuilderAddActionTrait,
  IExposedThingBuilderAddEventTrait,
  IProducedThingBuilderProduceTrait
//
{

}
