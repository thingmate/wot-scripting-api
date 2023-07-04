import { Abortable, AsyncTask } from '@lirx/async-task';

export interface IAsyncValueWriteFunction<GValue> {
  (
    value: GValue,
    abortable: Abortable,
  ): AsyncTask<void>;
}
