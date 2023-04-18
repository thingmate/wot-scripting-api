import { Abortable, AsyncTask, asyncTimeout, IAsyncTaskConstraint } from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IPushSinkWithBackPressure } from '@lirx/stream/src/push-sink/push-sink-with-back-pressure.type';
import { IThingValue } from '../../../types/thing-value.type';
import { IThingPropertyObserveFunctionOptions } from '../traits/observe/thing-property-observe.function-definition';
import {
  IThingPropertyObserveUsingReadLoopFunction,
} from '../traits/observe/using-read-loop/thing-property-observe.using-read-loop.function-definition';
import { IThingPropertyReadFunction } from '../traits/read/thing-property-read.function-definition';

export interface ICreateThingPropertyObserveUsingReadLoopFunctionOptions<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  read: IThingPropertyReadFunction<GValue>;
  defaultRefreshTime: number;
}

export function createThingPropertyObserveUsingReadLoopFunction<GValue extends IAsyncTaskConstraint<GValue, IThingValue>>(
  {
    read,
    defaultRefreshTime,
  }: ICreateThingPropertyObserveUsingReadLoopFunctionOptions<GValue>,
): IThingPropertyObserveUsingReadLoopFunction<GValue> {
  return (
    {
      refreshTime = defaultRefreshTime,
    }: IThingPropertyObserveFunctionOptions = {},
  ): IPushSourceWithBackPressure<GValue> => {
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
  };
}
