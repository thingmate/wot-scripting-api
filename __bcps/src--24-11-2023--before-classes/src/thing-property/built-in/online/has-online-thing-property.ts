import { hasThingProperty } from '../../functions/has-thing-property';
import { IHavingOnlineThingProperty } from './having-online-thing-property.type';

export function hasOnlineThingProperty(
  input: object,
): input is IHavingOnlineThingProperty {
  return hasThingProperty(input, 'online');
}
