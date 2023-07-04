import { Abortable, AsyncTask, asyncTimeout, IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSinkWithBackPressure } from '@lirx/stream/src/push-sink/push-sink-with-back-pressure.type';
import { IAsyncValueReadFunction } from '../../read/async-value.read.function-definition';
import { IAsyncValueObserveFunction } from '../async-value.observe.function-definition';

export interface ICreateAsyncValueObserveFunctionFromReadFunctionOptions<GValue extends IAsyncTaskConstraint<GValue>> {
  read: IAsyncValueReadFunction<GValue>;
  interval: number;
}

export function createAsyncValueObserveFunctionFromReadFunction<GValue extends IAsyncTaskConstraint<GValue>>(
  {
    read,
    interval,
  }: ICreateAsyncValueObserveFunctionFromReadFunctionOptions<GValue>,
): IAsyncValueObserveFunction<GValue> {
  return (
    sink: IPushSinkWithBackPressure<GValue>,
    abortable: Abortable,
  ): AsyncTask<void> => {
    const loop = (
      abortable: Abortable,
    ): AsyncTask<void> => {
      const start: number = Date.now();
      return read(abortable)
        .successful((
          value: GValue,
          abortable: Abortable,
        ): AsyncTask<void> => {
          return sink(value, abortable);
        })
        .successful((
          _,
          abortable: Abortable,
        ): AsyncTask<void> => {
          return asyncTimeout(
            Math.max(0, interval - (Date.now() - start)),
            abortable,
          );
        })
        .successful((
          _,
          abortable: Abortable,
        ): AsyncTask<void> => {
          return loop(abortable);
        });
    };

    return loop(abortable);
  };
}
