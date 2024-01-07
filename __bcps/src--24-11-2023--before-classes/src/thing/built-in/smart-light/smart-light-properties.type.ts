import { IHavingColorThingProperty } from '../../../thing-property/built-in/color-thing-property/having-color-thing-property.type';
import { IHavingOnlineThingProperty } from '../../../thing-property/built-in/online/having-online-thing-property.type';
import { IHavingOnOffThingProperty } from '../../../thing-property/built-in/onoff/having-on-off-thing-property.type';

export interface ISmartLightProperties extends //
  IHavingOnlineThingProperty,
  IHavingOnOffThingProperty,
  IHavingColorThingProperty
//
{
}

