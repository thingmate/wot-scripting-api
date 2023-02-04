import { PropertyElement } from 'wot-thing-description-types';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IPromiseLikeOrValue } from '@lirx/promise';
import { IExposedThingProperty } from '../../../components/property/esposed-thing-property.trait-collection';

export interface IExposedThingBuilderAddPropertyHandler<GValue extends DataSchemaValue> {
  (
    property: IExposedThingProperty<GValue>,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingBuilderAddPropertyFunction {
  <GValue extends DataSchemaValue>(
    name: string,
    options: DeepPartial<PropertyElement>,
    handler: IExposedThingBuilderAddPropertyHandler<GValue>,
  ): void;
}
