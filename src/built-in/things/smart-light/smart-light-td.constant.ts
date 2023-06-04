import { COLOR_THING_PROPERTY_TD } from '../../properties/color-thing-property/color-thing-property-td.constant';
import {
  ON_OFF_STATE_THING_PROPERTY_TD
} from '../../properties/on-off-state-thing-property/on-off-state-thing-property-td.constant';
import {
  TOGGLE_ON_OFF_STATE_THING_ACTION_TD
} from '../../actions/toggle-on-off-state-thing-action/toggle-on-off-state-thing-action-td.constant';

export const SMART_LIGHT_TD = {
  properties: {
    ...ON_OFF_STATE_THING_PROPERTY_TD,
    ...COLOR_THING_PROPERTY_TD,
  },
  actions: {
    ...TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
  },
};

