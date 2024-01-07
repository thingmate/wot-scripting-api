import { IThingPropertiesConstraint } from './thing-properties-constraint.type';

export interface IHavingThingProperties<GProperties extends IThingPropertiesConstraint<GProperties>> {
  readonly properties: Readonly<GProperties>;
}
