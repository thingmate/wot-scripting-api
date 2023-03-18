import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingPropertyObserveFunction } from './consumed-thing-property-observe.function-definition';

export interface IConsumedThingPropertyObserveTrait<GValue extends DataSchemaValue> {
  observe: IConsumedThingPropertyObserveFunction<GValue>;
}
