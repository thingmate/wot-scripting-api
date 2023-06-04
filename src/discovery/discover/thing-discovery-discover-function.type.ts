import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IGenericThing } from '../../thing/thing.class';

export interface IThingDiscoveryDiscoverFunction {
  (): IPushSourceWithBackPressure<IGenericThing>;
}
