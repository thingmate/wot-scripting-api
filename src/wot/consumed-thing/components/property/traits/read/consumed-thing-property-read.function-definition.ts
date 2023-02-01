import { IAbortablePromiseOptions, IPromise } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingPropertyReadOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export interface IConsumedThingPropertyReadFunction<GValue extends DataSchemaValue> {
  (
    options?: IConsumedThingPropertyReadOptions,
  ): IPromise<GValue>;
}
