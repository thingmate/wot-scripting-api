import { Abortable, IAsyncTaskInput } from '@lirx/async-task';
import { PropertyElement } from 'wot-thing-description-types';
import { IExposedThing } from '../../../exposed-thing/exposed-thing.trait-collection';
import { InferExposedThingPropertyFromName } from '../../../exposed-thing/types/infer-exposed-thing-property-from-name.type';
import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingPropertyNames } from '../../../thing/types/thing-properties-config.type';

export interface IExposedThingBuilderAddPropertyHandler<GConfig extends IThingConfig, GName extends InferThingPropertyNames<GConfig>> {
  (
    property: InferExposedThingPropertyFromName<GConfig, GName>,
    thing: IExposedThing<GConfig>,
    abortable: Abortable,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingBuilderAddPropertyFunction<GConfig extends IThingConfig> {
  <GName extends InferThingPropertyNames<GConfig>>(
    name: GName,
    options: DeepPartial<PropertyElement>,
    handler: IExposedThingBuilderAddPropertyHandler<GConfig, GName>,
  ): void;
}

// export interface IExposedThingBuilderAddPropertyHandler<GValue extends DataSchemaValue> {
//   (
//     property: IExposedThingProperty<GValue>,
//     thing: IExposedThing,
//   ): IPromiseLikeOrValue<void>;
// }
//
// export interface IExposedThingBuilderAddPropertyFunction {
//   <GValue extends DataSchemaValue>(
//     name: string,
//     options: DeepPartial<PropertyElement>,
//     handler: IExposedThingBuilderAddPropertyHandler<GValue>,
//   ): void;
// }
