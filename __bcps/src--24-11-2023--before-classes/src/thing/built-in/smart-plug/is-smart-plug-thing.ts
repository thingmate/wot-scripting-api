import { hasOnlineThingProperty } from '../../../thing-property/built-in/online/has-online-thing-property';
import { hasOnOffThingProperty } from '../../../thing-property/built-in/onoff/has-on-off-thing-property';
import {
  hasPowerConsumptionHistoryThingProperty,
} from '../../../thing-property/built-in/power-consumption-history-thing-property/has-power-consumption-history-thing-property';
import {
  hasPowerConsumptionThingProperty,
} from '../../../thing-property/built-in/power-consumption-thing-property/has-power-consumption-thing-property';
import { IGenericThing } from '../../thing.type';
import { ISmartPlugThing } from './smart-plug-thing.type';

export function isSmartPlugThing(
  input: IGenericThing,
): input is ISmartPlugThing {
  return hasOnlineThingProperty(input.properties)
    && hasOnOffThingProperty(input.properties)
    && hasPowerConsumptionThingProperty(input.properties)
    && hasPowerConsumptionHistoryThingProperty(input.properties);
}
