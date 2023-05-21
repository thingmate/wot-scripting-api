import { Abortable, AsyncTask, asyncTimeout, IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IPushSinkWithBackPressure } from '@lirx/stream/src/push-sink/push-sink-with-back-pressure.type';
import { IThingValue } from '../../types/thing-value.type';
import { IThingPropertyReadFunction } from '../read/thing-property-read-function.type';

export interface IObserveThingPropertyUsingReadLoopOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  read: IThingPropertyReadFunction<GValue>;
  refreshTime: number;
}

export function observeThingPropertyUsingReadLoop<GValue extends IAsyncTaskConstraint<GValue, IThingValue>>(
  {
    read,
    refreshTime,
  }: IObserveThingPropertyUsingReadLoopOptions<GValue>,
): IPushSourceWithBackPressure<GValue> {
  return (
    sink: IPushSinkWithBackPressure<GValue>,
    abortable: Abortable,
  ): AsyncTask<void> => {
    const loop = (
      abortable: Abortable,
    ): AsyncTask<void> => {
      const start: number = Date.now();
      return AsyncTask.fromFactory(read, abortable)
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
          const _refreshTime: number = Math.max(0, refreshTime - Date.now() + start);
          return asyncTimeout(_refreshTime, abortable);
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
