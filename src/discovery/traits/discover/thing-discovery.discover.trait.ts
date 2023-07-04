import { IGenericThing } from '../../../thing/thing.type';
import { IThingDiscoveryDiscoverFunction } from './thing-discovery.discover.function-definition';

export interface IThingDiscoveryDiscoverTrait<GThing extends IGenericThing> {
  discover: IThingDiscoveryDiscoverFunction<GThing>;
}
