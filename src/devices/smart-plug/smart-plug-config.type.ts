import { IHavingOnOffStateThingProperty } from '../shared/on-off-state/thing-config/on-off-state-thing-property.type';
import { IHavingToggleOnOffStateThingAction } from '../shared/on-off-state/thing-config/toggle-on-off-state-thing-action.type';
import {
  IHavingPowerConsumptionHistoryThingProperty,
} from '../shared/power-consumption-history/thing-config/power-consumption-history-thing-property.type';
import { IHavingPowerConsumptionThingProperty } from '../shared/power-consumption/thing-config/power-consumption-thing-property.type';

export interface ISmartPlugConfigProperties extends //
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

