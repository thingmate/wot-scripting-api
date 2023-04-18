import { IThingConfigProperties } from './thing-properties-config.type';
import { IThingGetPropertyFunction } from './thing-get-property.function-definition';

export interface IThingGetPropertyTrait<GConfig extends IThingConfigProperties> {
  getProperty: IThingGetPropertyFunction<GConfig>;
}
