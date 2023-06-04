import { IThingActionInitOptions } from '../../../../thing/action/thing-action.class';
import { IOnOffState } from '../../../shared/on-off-state/on-off-state.type';
import { IOnOffStateThingProperty } from '../../../properties/on-off-state-thing-property/on-off-state-thing-property.type';
import {
  createToggleOnOffStateThingActionInvokeFunctionFromOnOffStateThingProperty,
} from './create-toggle-on-off-state-thing-action-invoke-function-from-on-off-state-thing-property';

export function createToggleOnOffStateThingActionInitOptionsFromOnOffStateThingProperty(
  stateProperty: IOnOffStateThingProperty,
): IThingActionInitOptions<IOnOffState | null, IOnOffState> {
  return {
    invoke: createToggleOnOffStateThingActionInvokeFunctionFromOnOffStateThingProperty(stateProperty),
  };
}
