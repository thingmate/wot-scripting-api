import { IRecordConstraint } from '../../../misc/record-constraint.type';
import { IGenericThingProperty } from '../thing-property.class';

export type IThingConfigPropertiesConstraint<GConfig> =
  [GConfig] extends [{ properties: infer GThingConfigProperties }]
    ? { properties: IRecordConstraint<GThingConfigProperties, string, IGenericThingProperty> }
    : { properties?: void | undefined }
  ;

export type InferThingProperties<GConfig extends IThingConfigPropertiesConstraint<GConfig>> =
  GConfig['properties'] extends undefined
    ? {}
    : GConfig['properties'];

export type InferThingPropertyNames<GConfig extends IThingConfigPropertiesConstraint<GConfig>> =
  Extract<keyof InferThingProperties<GConfig>, string>;

export type InferThingPropertyFromName<GConfig extends IThingConfigPropertiesConstraint<GConfig>, GName extends InferThingPropertyNames<GConfig>> =
  InferThingProperties<GConfig>[GName];

