import { IThingConfig } from '../thing/types/thing-config.type';
import { IExposedThingBuilderAddActionTrait } from './traits/add-action/exposed-thing-builder-add-action.trait';
import { IExposedThingBuilderAddEventTrait } from './traits/add-event/exposed-thing-builder-add-event.trait';
import { IExposedThingBuilderAddPropertyTrait } from './traits/add-property/exposed-thing-builder-add-property.trait';
import { IExposedThingBuilderGetDescriptionTrait } from './traits/get-description/exposed-thing-builder-get-description.trait';
import { IProducedThingBuilderProduceTrait } from './traits/produce/exposed-thing-builder-produce.trait';

export interface IExposedThingBuilder<GConfig extends IThingConfig> extends // traits
  IExposedThingBuilderGetDescriptionTrait,
  IExposedThingBuilderAddPropertyTrait<GConfig>,
  IExposedThingBuilderAddActionTrait<GConfig>,
  IExposedThingBuilderAddEventTrait<GConfig>,
  IProducedThingBuilderProduceTrait<GConfig>
//
{

}
