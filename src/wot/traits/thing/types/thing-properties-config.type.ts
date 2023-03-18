import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';

export type IThingPropertiesConfig = Record<string, DataSchemaValue>;

export interface IThingConfigProperties {
  properties?: IThingPropertiesConfig;
}

export type InferThingProperties<GConfig extends IThingConfigProperties> =
  GConfig['properties'] extends undefined
    ? {}
    : GConfig['properties'];

export type InferThingPropertyNames<GConfig extends IThingConfigProperties> =
  Extract<keyof InferThingProperties<GConfig>, string>;

export type InferThingPropertyValueFromName<GConfig extends IThingConfigProperties, GName extends InferThingPropertyNames<GConfig>> =
  InferThingProperties<GConfig>[GName] extends IAsyncTaskConstraint<InferThingProperties<GConfig>[GName], DataSchemaValue>
    ? InferThingProperties<GConfig>[GName]
    : never;
