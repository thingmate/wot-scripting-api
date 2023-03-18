import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingPropertyNames } from '../../../thing/types/thing-properties-config.type';
import { IGenericExposedThingProperty } from '../../components/property/esposed-thing-property.trait-collection';
import { IExposedThingGetPropertyFunction } from '../../traits/get-property/exposed-thing-get-property.function-definition';
import { InferExposedThingPropertyFromName } from '../../types/infer-exposed-thing-property-from-name.type';

export function createCachedExposedThingGetPropertyFunction<GConfig extends IThingConfig>(
  getProperty: IExposedThingGetPropertyFunction<GConfig>,
): IExposedThingGetPropertyFunction<GConfig> {
  const properties = new Map<string, IGenericExposedThingProperty>();
  return <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
  ): InferExposedThingPropertyFromName<GConfig, GName> => {
    let property: InferExposedThingPropertyFromName<GConfig, GName> | undefined = properties.get(name) as InferExposedThingPropertyFromName<GConfig, GName> | undefined;
    if (property === void 0) {
      property = getProperty<GName>(name);
      properties.set(name, property as any);
    }
    return property;
  };
}
