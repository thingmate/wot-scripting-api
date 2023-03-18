import { IConsumedThing } from '../consumed-thing/consumed-thing.trait-collection';
import { IExposedThing } from '../exposed-thing/exposed-thing.trait-collection';
import { IThingConfig } from '../thing/types/thing-config.type';

export type ILinkedExposedAndConsumedThings<GConfig extends IThingConfig> = [
  IExposedThing<GConfig>,
  IConsumedThing<GConfig>,
];
