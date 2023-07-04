import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IGenericThing } from '../../../thing/thing.type';

export type IThingDiscoveryDiscoverFunction<GThing extends IGenericThing> = IPushSourceWithBackPressure<GThing>;
