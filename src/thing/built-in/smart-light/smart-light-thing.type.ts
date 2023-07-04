import { IThing } from '../../thing.type';
import { IThingDescription } from '../../traits/description/thing-description.type';
import { ISmartLightProperties } from './smart-light-properties.type';

export type ISmartLightThing<GDescription extends IThingDescription = IThingDescription> = IThing<ISmartLightProperties, GDescription>;

