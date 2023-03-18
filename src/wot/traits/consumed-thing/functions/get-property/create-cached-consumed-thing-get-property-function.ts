import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingPropertyNames } from '../../../thing/types/thing-properties-config.type';
import { IGenericConsumedThingProperty } from '../../components/property/consumed-thing-property.trait-collection';
import { IConsumedThingGetPropertyFunction } from '../../traits/get-property/consumed-thing-get-property.function-definition';
import { InferConsumedThingPropertyFromName } from '../../types/infer-consumed-thing-property-from-name.type';

export function createCachedConsumedThingGetPropertyFunction<GConfig extends IThingConfig>(
  getProperty: IConsumedThingGetPropertyFunction<GConfig>,
): IConsumedThingGetPropertyFunction<GConfig> {
  const properties = new Map<string, IGenericConsumedThingProperty>();
  return <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferConsumedThingPropertyFromName<GConfig, GName> => {
    let property: InferConsumedThingPropertyFromName<GConfig, GName> | undefined = properties.get(name) as InferConsumedThingPropertyFromName<GConfig, GName> | undefined;
    if (property === void 0) {
      property = getProperty<GName>(name);
      properties.set(name, property as any);
    }
    return property;
  };
}
