import { IHavingColorThingProperty } from '../../properties/color-thing-property/having-color-thing-property.type';
import {
  IHavingOnOffStateThingProperty
} from '../../properties/on-off-state-thing-property/having-on-off-state-thing-property.type';
import {
  IHavingToggleOnOffStateThingAction
} from '../../actions/toggle-on-off-state-thing-action/having-toggle-on-off-state-thing-action.type';

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
