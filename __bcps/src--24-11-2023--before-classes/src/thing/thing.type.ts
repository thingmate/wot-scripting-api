import { IHavingThingDescription } from './traits/description/having-thing-description.type';
import { IThingDescription } from './traits/description/thing-description.type';
import { IHavingThingProperties } from './traits/properties/having-properties-description.type';
import { IThingPropertiesConstraint } from './traits/properties/thing-properties-constraint.type';

export interface IThing<GProperties extends IThingPropertiesConstraint<GProperties>, GDescription extends IThingDescription = IThingDescription> extends //
  IHavingThingProperties<GProperties>,
  IHavingThingDescription<GDescription>
  //
{
}

export type IGenericThing = IThing<any, any>;
