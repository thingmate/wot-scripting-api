import { AsyncTask } from '@lirx/async-task';
import { ExposedThingInit } from 'wot-typescript-definitions';
import { IExposedThingBuilder } from '../../../../traits/exposed-thing-builder/exposed-thing-builder.trait-collection';
import {
  IProducedThingBuilderProduceFunctionOptions,
} from '../../../../traits/exposed-thing-builder/traits/produce/exposed-thing-builder-produce.function-definition';
import { IExposedThing } from '../../../../traits/exposed-thing/exposed-thing.trait-collection';
import { IThingConfig } from '../../../../traits/thing/types/thing-config.type';
import { IWoT } from '../../../../types/wot.type';
import { createExposedThingFromWoT } from '../../exposed-thing/from-wot/create-exposed-thing-from-wot';
import { createExposedThingBuilder } from '../create-exposed-thing-builder';

export function createExposedThingBuilderFromWoT<GConfig extends IThingConfig>(
  WoT: IWoT,
  td?: ExposedThingInit,
): IExposedThingBuilder<GConfig> {
  return createExposedThingBuilder<GConfig>(
    (
      td: ExposedThingInit,
      options?: IProducedThingBuilderProduceFunctionOptions,
    ): AsyncTask<IExposedThing<GConfig>> => {
      return createExposedThingFromWoT<GConfig>(WoT, td, options);
    },
    td,
  );
}
