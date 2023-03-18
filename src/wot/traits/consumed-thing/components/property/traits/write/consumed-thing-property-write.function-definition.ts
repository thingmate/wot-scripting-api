import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingPropertyWriteOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export interface IConsumedThingPropertyWriteFunction<GValue extends DataSchemaValue> {
  (
    value: GValue,
    options?: IConsumedThingPropertyWriteOptions,
  ): AsyncTask<void>;
}
