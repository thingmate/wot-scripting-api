import { AsyncTask, IOptionalAbortableOptions, optionalAbortableOptionsToAbortable } from '@lirx/async-task';
import { ExposedThing, ExposedThingInit } from 'wot-typescript-definitions';
import { IExposedThing } from '../../../../traits/exposed-thing/exposed-thing.trait-collection';
import { IThingConfig } from '../../../../traits/thing/types/thing-config.type';
import { IWoT } from '../../../../types/wot.type';
import { createExposedThingFromNativeExposedThing } from '../from-native-exposed-thing/create-exposed-thing-from-native-exposed-thing';

export interface ICreateExposedThingFromWoTOptions extends IOptionalAbortableOptions {
}

export function createExposedThingFromWoT<GConfig extends IThingConfig>(
  WoT: IWoT,
  td: ExposedThingInit,
  options?: ICreateExposedThingFromWoTOptions,
): AsyncTask<IExposedThing<GConfig>> {
  return AsyncTask.fromFactory(
    () => WoT.produce(td),
    optionalAbortableOptionsToAbortable(options),
  )
    .successful((thing: ExposedThing): IExposedThing<GConfig> => {
      return createExposedThingFromNativeExposedThing<GConfig>(thing);
    });
}
