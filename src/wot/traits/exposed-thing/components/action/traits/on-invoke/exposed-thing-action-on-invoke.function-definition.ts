import { IAbortableOptions, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { InteractionOptions } from 'wot-typescript-definitions';
import { IThingActionInType, IThingActionOutType } from '../../../../../thing/types/thing-actions-config.type';

export interface IExposedThingActionOnInvokeFunctionHandlerOptions extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingActionOnInvokeFunctionHandler<GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> {
  (
    value: GIn,
    options: IExposedThingActionOnInvokeFunctionHandlerOptions,
  ): IAsyncTaskInput<GOut>;
}

export interface IExposedThingActionOnInvokeFunction<GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> {
  (
    handler: IExposedThingActionOnInvokeFunctionHandler<GIn, GOut>,
  ): void;
}
