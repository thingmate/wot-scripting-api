import { IAsyncValueReadTrait } from '../../traits/read/async-value.read.trait';
import { IAsyncTaskConstraint, Abortable, AsyncTask, asyncTimeout } from '@lirx/async-task';
import { IAsyncValueOptionalObserveTrait } from '../../traits/observe/async-value.observe.trait';
import { IPushSinkWithBackPressure } from '@lirx/stream';
import { IAsyncValueObserveFunction } from '../../traits/observe/async-value.observe.function-definition';

export function getAsyncValueObserver<GValue extends IAsyncTaskConstraint<GValue>>(
  asyncValue: IAsyncValueReadTrait<GValue> & IAsyncValueOptionalObserveTrait<GValue>,
  period: number,
): IAsyncValueObserveFunction<GValue> {
  if (asyncValue.observe === void 0) {
    return (
      sink: IPushSinkWithBackPressure<GValue>,
      abortable: Abortable,
    ): AsyncTask<void> => {
      const loop = (
        abortable: Abortable,
      ): AsyncTask<void> => {
        const start: number = Date.now();
        return asyncValue.read(abortable)
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
              Math.max(0, period - (Date.now() - start)),
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
  } else {
    return asyncValue.observe;
  }
}

