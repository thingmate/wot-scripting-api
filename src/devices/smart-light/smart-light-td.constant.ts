import { COLOR_THING_PROPERTY_TD } from '../shared/color/thing-config/color-thing-property.type';
import { ON_OFF_STATE_THING_PROPERTY_TD } from '../shared/on-off-state/thing-config/on-off-state-thing-property.type';
import { TOGGLE_ON_OFF_STATE_THING_ACTION_TD } from '../shared/on-off-state/thing-config/toggle-on-off-state-thing-action.type';


export const SMART_LIGHT_TD = {
  properties: {
    ...ON_OFF_STATE_THING_PROPERTY_TD,
    ...COLOR_THING_PROPERTY_TD,
  },
  actions: {
    ...TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
  },
};

