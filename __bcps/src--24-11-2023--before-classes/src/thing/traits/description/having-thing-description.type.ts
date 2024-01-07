import { DeepReadonly } from '@lirx/utils';
import { IThingDescription } from './thing-description.type';

export interface IHavingThingDescription<GDescription extends IThingDescription> {
  readonly description: DeepReadonly<GDescription>;
}
