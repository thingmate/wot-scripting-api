import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IExposedThingBuilderAddEventFunction } from './exposed-thing-builder-add-event.function-definition';

export interface IExposedThingBuilderAddEventTrait<GConfig extends IThingConfig> {
  addEvent: IExposedThingBuilderAddEventFunction<GConfig>;
}
