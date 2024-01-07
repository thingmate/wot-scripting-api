import { IAsyncTaskConstraint } from '@lirx/async-task';
import { IThingProperty } from '../thing-property.type';

export function hasThingProperty<GName extends PropertyKey, GValue extends IAsyncTaskConstraint<GValue> = any>(
  input: object,
  propertyName: GName,
): input is Record<GName, IThingProperty<GValue>> {
  return propertyName in input;
}
