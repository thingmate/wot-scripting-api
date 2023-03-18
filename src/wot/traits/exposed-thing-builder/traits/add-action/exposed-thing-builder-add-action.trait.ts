import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IExposedThingBuilderAddActionFunction } from './exposed-thing-builder-add-action.function-definition';

export interface IExposedThingBuilderAddActionTrait<GConfig extends IThingConfig> {
  addAction: IExposedThingBuilderAddActionFunction<GConfig>;
}
