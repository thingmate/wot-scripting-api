import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValueReadFunction } from './async-value.read.function-definition';

export interface IAsyncValueReadTrait<GValue extends IAsyncTaskConstraint<GValue>> {
  readonly read: IAsyncValueReadFunction<GValue>;
}
