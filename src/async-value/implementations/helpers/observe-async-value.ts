import { Abortable, AsyncTask, asyncTimeout, IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { IAsyncValueOptionalObserveTrait } from '../../traits/observe/async-value.observe.trait';
import { IAsyncValueReadTrait } from '../../traits/read/async-value.read.trait';

export interface IAsyncValueToPushSourceWithBackPressure<GValue extends IAsyncTaskConstraint<GValue>> extends //
  IAsyncValueReadTrait<GValue>,
  IAsyncValueOptionalObserveTrait<GValue>
//
{
}

export interface IAsyncValueToPushSourceWithBackPressureOptions {
  readonly period?: number;
  readonly current?: boolean;
}

export function asyncValueToPushSourceWithBackPressure<GValue extends IAsyncTaskConstraint<GValue>>(
  asyncValue: IAsyncValueToPushSourceWithBackPressure<GValue>,
  {
    period = 10 * 1000,
    current = true,
  }: IAsyncValueToPushSourceWithBackPressureOptions = {},
): IPushSourceWithBackPressure<GValue> {
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
    if (current) {
      return (sink: IPushSinkWithBackPressure<GValue>, abortable: Abortable): AsyncTask<void> => {
        return asyncValue.read(abortable)
          .successful(sink)
          .successful((_, abortable: Abortable): AsyncTask<void> => {
            return asyncValue.observe!(sink, abortable);
          });
      };

      // return mergePushSourceWithBackPressure([
      //   (sink: IPushSinkWithBackPressure<GValue>, abortable: Abortable): AsyncTask<void> => {
      //     return asyncValue.read(abortable)
      //       .successful(sink);
      //   },
      //   asyncValue.observe,
      // ]);
    } else {
      return asyncValue.observe;
    }
  }
}

