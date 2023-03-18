import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingActionInType, IThingActionOutType } from '../../../thing/types/thing-actions-config.type';
import { IExposedThingActionGetDescriptionTrait } from './traits/get-description/exposed-thing-action-get-description.trait';
import { IExposedThingActionGetNameTrait } from './traits/get-name/exposed-thing-action-get-name.trait';
import { IExposedThingActionOnInvokeTrait } from './traits/on-invoke/exposed-thing-action-on-invoke.trait';

export interface IExposedThingAction<GName extends string, GIn extends IThingActionInType, GOut extends IAsyncTaskConstraint<GOut, IThingActionOutType>> extends // traits
  IExposedThingActionGetNameTrait<GName>,
  IExposedThingActionGetDescriptionTrait,
  IExposedThingActionOnInvokeTrait<GIn, GOut>
//
{

}

export type IGenericExposedThingAction = IExposedThingAction<string, IThingActionInType, IThingActionOutType>;
