import { hasThingProperty } from '../../functions/has-thing-property';
import { IHavingColorThingProperty } from './having-color-thing-property.type';

export function hasColorThingProperty(
  input: object,
): input is IHavingColorThingProperty {
  return hasThingProperty(input, 'color');
}
