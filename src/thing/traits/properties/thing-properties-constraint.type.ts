import { IGenericThingProperty } from '../../../thing-property/thing-property.type';

export type IThingPropertiesConstraint<GProperties> = {
  readonly [GKey in keyof GProperties]: IGenericThingProperty;
};
