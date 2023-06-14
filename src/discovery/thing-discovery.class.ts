import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IGenericThing } from '../thing/thing.class';
import { IThingDiscoveryDiscoverFunction } from './discover/thing-discovery-discover-function.type';

export interface IThingDiscoveryInitOptions<GOptions> {
  discover: IThingDiscoveryDiscoverFunction<GOptions>;
}

export class ThingDiscovery<GOptions> {
  readonly #discover: IThingDiscoveryDiscoverFunction<GOptions>;

  constructor(
    {
      discover,
    }: IThingDiscoveryInitOptions<GOptions>,
  ) {
    this.#discover = discover;
  }

  discover(
    options: GOptions,
  ): IPushSourceWithBackPressure<IGenericThing> {
    return this.#discover(options);
  }
}
