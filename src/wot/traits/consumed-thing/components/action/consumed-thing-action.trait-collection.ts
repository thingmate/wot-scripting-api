import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingActionInType, IThingActionOutType } from '../../../thing/types/thing-actions-config.type';
import { IConsumedThingActionGetDescriptionTrait } from './traits/get-description/consumed-thing-action-get-description.trait';
import { IConsumedThingActionGetNameTrait } from './traits/get-name/consumed-thing-action-get-name.trait';
import { IConsumedThingActionInvokeTrait } from './traits/invoke/consumed-thing-action-invoke.trait';

export interface IConsumedThingAction<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> extends // traits
  IConsumedThingActionGetNameTrait<GName>,
  IConsumedThingActionGetDescriptionTrait,
  IConsumedThingActionInvokeTrait<GIn, GOut>
//
{

}

export type IGenericConsumedThingAction = IConsumedThingAction<string, IThingActionInType, IThingActionOutType>;
