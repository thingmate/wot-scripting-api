import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../../../types/thing-value.type';
import { IThingPropertyReadFunction } from './thing-property-read.function-definition';

export interface IThingPropertyReadTrait<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  read: IThingPropertyReadFunction<GValue>;
}
