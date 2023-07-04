import { IGenericThing } from '../thing/thing.type';
import { IThingDiscoveryDiscoverTrait } from './traits/discover/thing-discovery.discover.trait';

export interface IThingDiscovery<GThing extends IGenericThing> extends //
  IThingDiscoveryDiscoverTrait<GThing>
  //
{

}
