import { ExposedThingInit } from 'wot-typescript-definitions';
import { IWoT } from '../../types/wot.type';
import { IExposedThing } from '../exposed-thing.trait-collection';
import { createExposedThingFromNativeExposedThing } from './create-exposed-thing-from-native-exposed-thing';

export function createExposedThingFromThingDescription(
  WoT: IWoT,
  td: ExposedThingInit,
  // TODO support abort
): Promise<IExposedThing> {
  return WoT.produce(td)
    .then(createExposedThingFromNativeExposedThing);
}
