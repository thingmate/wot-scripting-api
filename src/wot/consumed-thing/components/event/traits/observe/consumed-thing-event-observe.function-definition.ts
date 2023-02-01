import { IAbortablePromiseOptions } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../../observer/comsumed-thing-observer.trait-collection';

export interface IConsumedThingEventObserveOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export type IConsumedThingEventObserver<GValue extends DataSchemaValue> = IConsumedThingObserver<GValue>;

export interface IConsumedThingEventObserveFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingEventObserveOptions,
  ): Promise<IConsumedThingEventObserver<GValue>>;
}
