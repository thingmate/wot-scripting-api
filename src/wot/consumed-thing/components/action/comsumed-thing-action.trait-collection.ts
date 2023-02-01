import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingActionGetDescriptionTrait } from './traits/get-description/consumed-thing-action-get-description.trait';
import { IConsumedThingActionGetNameTrait } from './traits/get-name/consumed-thing-action-get-name.trait';
import { IConsumedThingActionInvokeTrait } from './traits/invoke/consumed-thing-action-invoke.trait';

export interface IConsumedThingAction<GIn extends DataSchemaValue, GOut extends DataSchemaValue> extends // traits
  IConsumedThingActionGetNameTrait,
  IConsumedThingActionGetDescriptionTrait,
  IConsumedThingActionInvokeTrait<GIn, GOut>
//
{

}
