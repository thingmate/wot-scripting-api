import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../../../types/thing-value.type';
import { IThingActionInvokeFunction } from './thing-action-invoke.function-definition';

export interface IThingActionInvokeTrait<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> {
  invoke: IThingActionInvokeFunction<GIn, GOut>;
}
