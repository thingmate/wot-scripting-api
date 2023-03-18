import { InferThingPropertyNames, IThingConfigProperties } from '../../../thing/types/thing-properties-config.type';
import { InferConsumedThingPropertyFromName } from '../../types/infer-consumed-thing-property-from-name.type';

export interface IConsumedThingGetPropertyFunction<GConfig extends IThingConfigProperties> {
  <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferConsumedThingPropertyFromName<GConfig, GName>;
}

