import { ThingAction } from '../../../../thing/action/thing-action.class';
import { IOnOffState } from '../../../shared/on-off-state/on-off-state.type';
import { IOnOffStateThingProperty } from '../../../properties/on-off-state-thing-property/on-off-state-thing-property.type';
import { IToggleOnOffStateThingAction } from '../toggle-on-off-state-thing-action.type';
import {
  createToggleOnOffStateThingActionInitOptionsFromOnOffStateThingProperty,
} from './create-toggle-on-off-state-thing-action-init-options-from-on-off-state-thing-property';

export function createToggleOnOffStateThingActionFromOnOffStateThingProperty(
  stateProperty: IOnOffStateThingProperty,
): IToggleOnOffStateThingAction {
  return new ThingAction<IOnOffState | null, IOnOffState>(
    createToggleOnOffStateThingActionInitOptionsFromOnOffStateThingProperty(stateProperty),
  );
}

