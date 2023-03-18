import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingActionInType, IThingActionOutType } from '../../../../../thing/types/thing-actions-config.type';
import { IConsumedThingActionInvokeFunction } from './consumed-thing-action-invoke.function-definition';

export interface IConsumedThingActionInvokeTrait<GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> {
  invoke: IConsumedThingActionInvokeFunction<GIn, GOut>;
}
