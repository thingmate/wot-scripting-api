import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValueWriteFunction } from './async-value.write.function-definition';

export interface IAsyncValueWriteTrait<GValue extends IAsyncTaskConstraint<GValue>> {
  write: IAsyncValueWriteFunction<GValue>;
}

export type IAsyncValueOptionalWriteTrait<GValue extends IAsyncTaskConstraint<GValue>> = Partial<IAsyncValueWriteTrait<GValue>>;
