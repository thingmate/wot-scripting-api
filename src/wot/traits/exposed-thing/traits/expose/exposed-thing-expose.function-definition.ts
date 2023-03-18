import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';

export interface IExposedThingExposeFunctionOptions extends IOptionalAbortableOptions {
}

export interface IExposedThingExposeFunction {
  (
    options?: IExposedThingExposeFunctionOptions,
  ): AsyncTask<void>;
}
