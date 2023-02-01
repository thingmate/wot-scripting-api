import { IPromise } from '@lirx/promise';
import { ThingDescription } from 'wot-typescript-definitions';
import { IWoT } from '../../../wot.type';
import { IConsumedThing } from '../comsumed-thing.trait-collection';
import { createConsumedThingFromNativeConsumedThing } from './create-consumed-thing-from-native-consumed-thing';

export function createConsumedThingFromThingDescription(
  WoT: IWoT,
  td: ThingDescription,
  // TODO support abort
): IPromise<IConsumedThing> {
  return WoT.consume(td)
    .then(createConsumedThingFromNativeConsumedThing);
}
