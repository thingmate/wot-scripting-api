import { IAbortablePromiseOptions } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';
import { IConsumedThingObserver } from '../../../observer/comsumed-thing-observer.trait-collection';

export interface IConsumedThingPropertyObserveOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export type IConsumedThingPropertyObserver<GValue extends DataSchemaValue> = IConsumedThingObserver<GValue>;

export interface IConsumedThingPropertyObserveFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingPropertyObserveOptions,
  ): Promise<IConsumedThingPropertyObserver<GValue>>;
}
