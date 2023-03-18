import { AsyncTask, IOptionalAbortableOptions, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { ConsumedThing, ThingDescription } from 'wot-typescript-definitions';
import { IConsumedThing } from '../../../../traits/consumed-thing/consumed-thing.trait-collection';
import { IThingConfig } from '../../../../traits/thing/types/thing-config.type';
import { IWoT } from '../../../../types/wot.type';
import { createConsumedThingFromNativeConsumedThing } from '../from-native-consumed-thing/create-consumed-thing-from-native-consumed-thing';

export interface ICreateConsumedThingFromWoTOptions extends IOptionalAbortableOptions {
}

export function createConsumedThingFromWoT<GConfig extends IThingConfig>(
  WoT: IWoT,
  td: ThingDescription,
  options?: ICreateConsumedThingFromWoTOptions,
): AsyncTask<IConsumedThing<GConfig>> {
  return AsyncTask.fromFactory(
    () => WoT.consume(td),
    optionalAbortableOptionsToAbortable(options),
  )
    .successful((thing: ConsumedThing): IConsumedThing<GConfig> => {
      return createConsumedThingFromNativeConsumedThing<GConfig>(thing);
    });
}
