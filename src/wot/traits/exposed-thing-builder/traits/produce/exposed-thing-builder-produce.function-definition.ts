import { AsyncTask, IOptionalAbortableOptions } from '@lirx/async-task';
import { IExposedThing } from '../../../exposed-thing/exposed-thing.trait-collection';
import { IThingConfig } from '../../../thing/types/thing-config.type';

export interface IProducedThingBuilderProduceFunctionOptions extends IOptionalAbortableOptions {
}

export interface IProducedThingBuilderProduceFunction<GConfig extends IThingConfig> {
  (
    options?: IProducedThingBuilderProduceFunctionOptions,
  ): AsyncTask<IExposedThing<GConfig>>;
}
