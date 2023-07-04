import { hasThingProperty } from '../../functions/has-thing-property';
import { IHavingOnOffThingProperty } from './having-on-off-thing-property.type';

export function hasOnOffThingProperty(
  input: object,
): input is IHavingOnOffThingProperty {
  return hasThingProperty(input, 'onoff')
}
