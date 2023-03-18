import { AsyncTask, IAsyncTaskConstraint, IOptionalAbortableOptions } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingPropertyReadOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export interface IConsumedThingPropertyReadFunction<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  (
    options?: IConsumedThingPropertyReadOptions,
  ): AsyncTask<GValue>;
}
