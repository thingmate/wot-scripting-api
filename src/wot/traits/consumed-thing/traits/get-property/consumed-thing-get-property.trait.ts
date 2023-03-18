import { IThingConfigProperties } from '../../../thing/types/thing-properties-config.type';
import { IConsumedThingGetPropertyFunction } from './consumed-thing-get-property.function-definition';

export interface IConsumedThingGetPropertyTrait<GConfig extends IThingConfigProperties> {
  getProperty: IConsumedThingGetPropertyFunction<GConfig>;
}
