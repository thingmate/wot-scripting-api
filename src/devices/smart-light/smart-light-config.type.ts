import { IHavingColorThingProperty } from '../shared/color/thing-config/color-thing-property.type';
import { IHavingOnOffStateThingProperty } from '../shared/on-off-state/thing-config/on-off-state-thing-property.type';
import { IHavingToggleOnOffStateThingAction } from '../shared/on-off-state/thing-config/toggle-on-off-state-thing-action.type';

export interface ISmartLightConfigProperties extends //
  IHavingOnOffStateThingProperty,
  IHavingColorThingProperty
//
{
}

export interface ISmartLightConfigActions extends //
  IHavingToggleOnOffStateThingAction
//
{

}

export interface ISmartLightConfig {
  properties: ISmartLightConfigProperties;
  actions: ISmartLightConfigActions;
}
