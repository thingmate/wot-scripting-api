import { InferThingPropertyNames, IThingConfigProperties } from '../../../thing/types/thing-properties-config.type';
import { InferExposedThingPropertyFromName } from '../../types/infer-exposed-thing-property-from-name.type';

export interface IExposedThingGetPropertyFunction<GConfig extends IThingConfigProperties> {
  <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferExposedThingPropertyFromName<GConfig, GName>;
}
