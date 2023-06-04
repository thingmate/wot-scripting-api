import { IOnOffStateThingProperty } from '../../properties/on-off-state-thing-property/on-off-state-thing-property.type';
import {
  createToggleOnOffStateThingActionInitOptionsFromOnOffStateThingProperty,
} from './functions/create-toggle-on-off-state-thing-action-init-options-from-on-off-state-thing-property';
import { ToggleOnOffStateThingAction } from './toggle-on-off-state-thing-action.class';

export class ToggleOnOffStateThingActionFromOnOffStateThingProperty extends ToggleOnOffStateThingAction {
  constructor(
    stateProperty: IOnOffStateThingProperty,
  ) {
    super(
      createToggleOnOffStateThingActionInitOptionsFromOnOffStateThingProperty(stateProperty),
    );
  }
}
