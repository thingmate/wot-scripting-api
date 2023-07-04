import { Abortable, AsyncTask, IAsyncTaskConstraint } from '@lirx/async-task';

export interface IAsyncValueReadFunction<GValue extends IAsyncTaskConstraint<GValue>> {
  (
    abortable: Abortable,
  ): AsyncTask<GValue>;
}
