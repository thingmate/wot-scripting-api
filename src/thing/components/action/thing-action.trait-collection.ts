import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingValue } from '../../types/thing-value.type';
import { IThingActionInvokeTrait } from './traits/invoke/thing-action-invoke.trait';

export interface IThingAction<GIn extends IThingValue, GOut extends IAsyncTaskConstraint<GOut, IThingValue>> extends // traits
  IThingActionInvokeTrait<GIn, GOut>
//
{

}

export type IGenericThingAction = IThingAction<any, IThingValue>;
