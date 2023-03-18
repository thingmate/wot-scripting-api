import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingActionInType, IThingActionOutType } from '../../../../../thing/types/thing-actions-config.type';
import { IExposedThingActionOnInvokeFunction } from './exposed-thing-action-on-invoke.function-definition';

export interface IExposedThingActionOnInvokeTrait<GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> {
  onInvoke: IExposedThingActionOnInvokeFunction<GIn, GOut>;
}
