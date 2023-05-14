import { Abortable, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { IThingValue } from '../../types/thing-value.type';

export interface IThingPropertyReadFunction<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  (
    abortable: Abortable,
  ): IAsyncTaskInput<GValue>;
}
