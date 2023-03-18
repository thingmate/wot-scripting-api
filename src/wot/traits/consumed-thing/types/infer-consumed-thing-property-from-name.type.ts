import {
  InferThingPropertyNames,
  InferThingPropertyValueFromName,
  IThingConfigProperties,
} from '../../thing/types/thing-properties-config.type';
import { IConsumedThingProperty } from '../components/property/consumed-thing-property.trait-collection';

export type InferConsumedThingPropertyFromName<GConfig extends IThingConfigProperties, GName extends InferThingPropertyNames<GConfig>> =
  IConsumedThingProperty<GName, InferThingPropertyValueFromName<GConfig, GName>>;
