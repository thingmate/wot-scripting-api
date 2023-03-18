import { IThingConfigProperties } from '../../../thing/types/thing-properties-config.type';
import { IExposedThingGetPropertyFunction } from './exposed-thing-get-property.function-definition';

export interface IExposedThingGetPropertyTrait<GConfig extends IThingConfigProperties> {
  getProperty: IExposedThingGetPropertyFunction<GConfig>;
}
