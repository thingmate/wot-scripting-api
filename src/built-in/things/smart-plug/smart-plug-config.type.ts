import {
  IHavingOnOffStateThingProperty
} from '../../properties/on-off-state-thing-property/having-on-off-state-thing-property.type';
import {
  IHavingToggleOnOffStateThingAction
} from '../../actions/toggle-on-off-state-thing-action/having-toggle-on-off-state-thing-action.type';
import { IHavingOnlineThingProperty } from '../../properties/online-thing-property/having-online-thing-property.type';
import {
  IHavingPowerConsumptionHistoryThingProperty,
} from '../../properties/power-consumption-history-thing-property/power-consumption-history-thing-property.type';
import { IHavingPowerConsumptionThingProperty } from '../../properties/power-consumption-thing-property/power-consumption-thing-property.type';

export interface ISmartPlugConfigProperties extends //
  IHavingOnlineThingProperty,
  IHavingOnOffStateThingProperty,
  IHavingPowerConsumptionThingProperty,
  IHavingPowerConsumptionHistoryThingProperty
//
{
}

export interface ISmartPlugConfigActions extends //
  IHavingToggleOnOffStateThingAction
//
{

}

export interface ISmartPlugConfig {
  properties: ISmartPlugConfigProperties;
  actions: ISmartPlugConfigActions;
}

