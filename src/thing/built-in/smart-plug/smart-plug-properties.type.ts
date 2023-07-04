import { IHavingOnlineThingProperty } from '../../../thing-property/built-in/online/having-online-thing-property.type';
import { IHavingOnOffThingProperty } from '../../../thing-property/built-in/onoff/having-on-off-thing-property.type';
import {
  IHavingPowerConsumptionHistoryThingProperty,
} from '../../../thing-property/built-in/power-consumption-history-thing-property/having-power-consumption-history-thing-property.type';
import {
  IHavingPowerConsumptionThingProperty,
} from '../../../thing-property/built-in/power-consumption-thing-property/having-power-consumption-thing-property.type';

export interface ISmartPlugProperties extends //
  IHavingOnlineThingProperty,
  IHavingOnOffThingProperty,
  IHavingPowerConsumptionThingProperty,
  IHavingPowerConsumptionHistoryThingProperty
//
{
}
