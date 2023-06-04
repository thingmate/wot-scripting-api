import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IGenericThing } from '../thing/thing.class';
import { IThingDiscoveryDiscoverFunction } from './discover/thing-discovery-discover-function.type';

export interface IThingDiscoveryInitOptions {
  discover: IThingDiscoveryDiscoverFunction;
}

export class ThingDiscovery {
  readonly #discover: IThingDiscoveryDiscoverFunction;

  constructor(
    {
      discover,
    }: IThingDiscoveryInitOptions,
  ) {
    this.#discover = discover;
  }

  discover(): IPushSourceWithBackPressure<IGenericThing> {
    return this.#discover();
  }
}

