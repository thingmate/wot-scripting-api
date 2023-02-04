import { IWoT } from '../../../../types/wot.type';
import { IExposedThing } from '../../../exposed-thing.trait-collection';

export interface IProducedThingBuilderProduceFunction {
  (
    WoT: IWoT,
  ): Promise<IExposedThing>;
}
