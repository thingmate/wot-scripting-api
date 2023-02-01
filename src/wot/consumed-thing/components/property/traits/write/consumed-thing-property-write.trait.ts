import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingPropertyWriteFunction } from './consumed-thing-property-write.function-definition';

export interface IConsumedThingPropertyWriteTrait<GValue extends DataSchemaValue> {
  write: IConsumedThingPropertyWriteFunction<GValue>;
}
