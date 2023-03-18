import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingPropertyReadFunction } from './consumed-thing-property-read.function-definition';

export interface IConsumedThingPropertyReadTrait<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  read: IConsumedThingPropertyReadFunction<GValue>;
}
