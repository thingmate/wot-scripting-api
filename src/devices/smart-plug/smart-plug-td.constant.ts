import { ON_OFF_STATE_THING_PROPERTY_TD } from '../shared/on-off-state/thing-config/on-off-state-thing-property.type';
import { TOGGLE_ON_OFF_STATE_THING_ACTION_TD } from '../shared/on-off-state/thing-config/toggle-on-off-state-thing-action.type';
import {
  POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
} from '../shared/power-consumption-history/thing-config/power-consumption-history-thing-property.type';
import { POWER_CONSUMPTION_THING_PROPERTY_TD } from '../shared/power-consumption/thing-config/power-consumption-thing-property.type';

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

