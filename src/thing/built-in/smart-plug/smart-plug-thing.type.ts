import { IThing } from '../../thing.type';
import { IThingDescription } from '../../traits/description/thing-description.type';
import { ISmartPlugProperties } from './smart-plug-properties.type';

export type ISmartPlugThing<GDescription extends IThingDescription = IThingDescription> = IThing<ISmartPlugProperties, GDescription>;

