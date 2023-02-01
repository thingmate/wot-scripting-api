import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingProperty } from '../../components/property/comsumed-thing-property.trait-collection';

export interface IConsumedThingGetPropertyFunction {
  <GValue extends DataSchemaValue>(
    name: string,
  ): IConsumedThingProperty<GValue>;
}
