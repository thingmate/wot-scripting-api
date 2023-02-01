import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingActionOnInvokeFunctionHandler<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  (
    value: GIn,
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<GOut>;
}

export interface IExposedThingActionOnInvokeFunction<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  (
    handler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut>,
  ): void;
}
