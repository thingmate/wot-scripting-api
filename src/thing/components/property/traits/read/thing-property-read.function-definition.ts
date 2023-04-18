import { Abortable, AsyncTask, IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../../../types/thing-value.type';

export interface IThingPropertyReadFunction<GValue extends IAsyncTaskConstraint<GValue, IThingValue>> {
  (
    abortable: Abortable,
  ): AsyncTask<GValue>;
}
