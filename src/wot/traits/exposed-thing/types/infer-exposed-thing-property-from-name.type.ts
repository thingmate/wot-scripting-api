import {
  InferThingPropertyNames,
  InferThingPropertyValueFromName,
  IThingConfigProperties,
} from '../../thing/types/thing-properties-config.type';
import { IExposedThingProperty } from '../components/property/esposed-thing-property.trait-collection';

export type InferExposedThingPropertyFromName<GConfig extends IThingConfigProperties, GName extends InferThingPropertyNames<GConfig>> =
  IExposedThingProperty<GName, InferThingPropertyValueFromName<GConfig, GName>>;
