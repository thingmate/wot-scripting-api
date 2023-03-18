import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../../observer/consumed-thing-observer.trait-collection';

export interface IConsumedThingPropertyObserveOptions extends InteractionOptions, IOptionalAbortableOptions {
}

export type IConsumedThingPropertyObserver<GValue extends DataSchemaValue> = IConsumedThingObserver<GValue>;

export interface IConsumedThingPropertyObserveFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingPropertyObserveOptions,
  ): AsyncTask<IConsumedThingPropertyObserver<GValue>>;
}
