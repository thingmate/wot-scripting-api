import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingActionGetDescriptionTrait } from './traits/get-description/exposed-thing-action-get-description.trait';
import { IExposedThingActionGetNameTrait } from './traits/get-name/exposed-thing-action-get-name.trait';
import { IExposedThingActionOnInvokeTrait } from './traits/on-invoke/exposed-thing-action-on-invoke.trait';

export interface IExposedThingAction<GIn extends DataSchemaValue, GOut extends DataSchemaValue> extends // traits
  IExposedThingActionGetNameTrait,
  IExposedThingActionGetDescriptionTrait,
  IExposedThingActionOnInvokeTrait<GIn, GOut>
//
{

}
