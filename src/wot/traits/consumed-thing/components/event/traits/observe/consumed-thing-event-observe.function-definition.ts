import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../../observer/consumed-thing-observer.trait-collection';

export interface IConsumedThingEventObserveOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export type IConsumedThingEventObserver<GValue extends DataSchemaValue> = IConsumedThingObserver<GValue>;

export interface IConsumedThingEventObserveFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingEventObserveOptions,
  ): AsyncTask<IConsumedThingEventObserver<GValue>>;
}
