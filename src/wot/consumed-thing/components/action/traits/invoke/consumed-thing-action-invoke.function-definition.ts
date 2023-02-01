import { IAbortablePromiseOptions, IPromise } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IConsumedThingActionInvokeOptions extends IAbortablePromiseOptions, InteractionOptions {

}

export interface IConsumedThingActionInvokeFunction<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  (
    value?: GIn,
    options?: IConsumedThingActionInvokeOptions,
  ): IPromise<GOut>;
}
