import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IExposedThingBuilderAddPropertyFunction } from './exposed-thing-builder-add-property.function-definition';

export interface IExposedThingBuilderAddPropertyTrait<GConfig extends IThingConfig> {
  addProperty: IExposedThingBuilderAddPropertyFunction<GConfig>;
}
