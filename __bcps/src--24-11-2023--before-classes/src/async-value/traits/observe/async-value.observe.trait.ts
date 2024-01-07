import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IAsyncValueObserveFunction } from './async-value.observe.function-definition';

export interface IAsyncValueObserveTrait<GValue> {
  readonly observe: IAsyncValueObserveFunction<GValue>;
}

export type IAsyncValueOptionalObserveTrait<GValue extends IAsyncTaskConstraint<GValue>> = Partial<IAsyncValueObserveTrait<GValue>>;
