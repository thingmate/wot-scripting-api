import { IGenericThingProperty } from '../../components/property/thing-property.trait-collection';

export type IThingPropertiesConfig = Record<string, IGenericThingProperty>;

export interface IThingConfigProperties {
  properties?: IThingPropertiesConfig;
}

export type InferThingProperties<GConfig extends IThingConfigProperties> =
  GConfig['properties'] extends undefined
    ? {}
    : GConfig['properties'];

export type InferThingPropertyNames<GConfig extends IThingConfigProperties> =
  Extract<keyof InferThingProperties<GConfig>, string>;

export type InferThingPropertyFromName<GConfig extends IThingConfigProperties, GName extends InferThingPropertyNames<GConfig>> =
  InferThingProperties<GConfig>[GName];
