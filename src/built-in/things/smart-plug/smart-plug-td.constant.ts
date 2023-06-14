import { IThingDescription } from '../../../thing/thing.class';
import {
  HAVING_TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
} from '../../actions/toggle-on-off-state-thing-action/toggle-on-off-state-thing-action-td.constant';
import {
  HAVING_ON_OFF_STATE_THING_PROPERTY_TD,
} from '../../properties/on-off-state-thing-property/on-off-state-thing-property-td.constant';
import { HAVING_ONLINE_THING_PROPERTY_TD } from '../../properties/online-thing-property/online-thing-property-td.constant';
import {
  HAVING_POWER_CONSUMPTION_THING_PROPERTY_TD,
} from '../../properties/power-consumption-thing-property/power-consumption-thing-property.type';
import {
  HAVING_POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
} from '../../properties/power-consumption-history-thing-property/power-consumption-history-thing-property.type';

export const SMART_PLUG_TD = {
  properties: {
    ...HAVING_ONLINE_THING_PROPERTY_TD,
    ...HAVING_ON_OFF_STATE_THING_PROPERTY_TD,
    ...HAVING_POWER_CONSUMPTION_THING_PROPERTY_TD,
    ...HAVING_POWER_CONSUMPTION_HISTORY_THING_PROPERTY_TD,
  },
  actions: {
    ...HAVING_TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
  },
} satisfies IThingDescription;

