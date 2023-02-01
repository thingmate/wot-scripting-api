import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingPropertyReadFunction } from './consumed-thing-property-read.function-definition';

export interface IConsumedThingPropertyReadTrait<GValue extends DataSchemaValue> {
  read: IConsumedThingPropertyReadFunction<GValue>;
}
