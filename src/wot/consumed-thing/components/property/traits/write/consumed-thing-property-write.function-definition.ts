import { IAbortablePromiseOptions, IPromise } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingPropertyWriteOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export interface IConsumedThingPropertyWriteFunction<GValue extends DataSchemaValue> {
  (
    value: GValue,
    options?: IConsumedThingPropertyWriteOptions,
  ): IPromise<void>;
}
