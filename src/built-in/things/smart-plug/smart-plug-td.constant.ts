import {
  ON_OFF_STATE_THING_PROPERTY_TD
} from '../../properties/on-off-state-thing-property/on-off-state-thing-property-td.constant';
import {
  TOGGLE_ON_OFF_STATE_THING_ACTION_TD
} from '../../actions/toggle-on-off-state-thing-action/toggle-on-off-state-thing-action-td.constant';
import {
  POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
} from '../../properties/power-consumption-history-thing-property/power-consumption-history-thing-property.type';
import { POWER_CONSUMPTION_THING_PROPERTY_TD } from '../../properties/power-concumption-thing-property/power-consumption-thing-property.type';

export const SMART_PLUG_TD = {
  properties: {
    ...ON_OFF_STATE_THING_PROPERTY_TD,
    ...POWER_CONSUMPTION_THING_PROPERTY_TD,
    ...POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
  },
  actions: {
    ...TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
  },
};

