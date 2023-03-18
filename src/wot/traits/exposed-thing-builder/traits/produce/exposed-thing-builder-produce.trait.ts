import { IThingConfig } from '../../../thing/types/thing-config.type';
import { IProducedThingBuilderProduceFunction } from './exposed-thing-builder-produce.function-definition';

export interface IProducedThingBuilderProduceTrait<GConfig extends IThingConfig> {
  produce: IProducedThingBuilderProduceFunction<GConfig>;
}
