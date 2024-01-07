import { hasColorThingProperty } from '../../../thing-property/built-in/color-thing-property/has-color-thing-property';
import { hasOnlineThingProperty } from '../../../thing-property/built-in/online/has-online-thing-property';
import { hasOnOffThingProperty } from '../../../thing-property/built-in/onoff/has-on-off-thing-property';
import { IGenericThing } from '../../thing.type';
import { ISmartLightThing } from './smart-light-thing.type';

export function isSmartLightThing(
  input: IGenericThing,
): input is ISmartLightThing {
  return hasOnlineThingProperty(input.properties)
    && hasOnOffThingProperty(input.properties)
    && hasColorThingProperty(input.properties);
}
