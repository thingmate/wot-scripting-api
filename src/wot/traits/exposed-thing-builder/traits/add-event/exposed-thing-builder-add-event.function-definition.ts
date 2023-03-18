import { Abortable, IAsyncTaskInput } from '@lirx/async-task';
import { EventElement } from 'wot-thing-description-types';
import { IExposedThing } from '../../../exposed-thing/exposed-thing.trait-collection';
import { InferExposedThingEventFromName } from '../../../exposed-thing/types/infer-exposed-thing-event-from-name.type';
import { IThingConfig } from '../../../thing/types/thing-config.type';
import { InferThingEventNames } from '../../../thing/types/thing-events-config.type';

export interface IExposedThingBuilderAddEventHandler<GConfig extends IThingConfig, GName extends InferThingEventNames<GConfig>> {
  (
    event: InferExposedThingEventFromName<GConfig, GName>,
    thing: IExposedThing<GConfig>,
    abortable: Abortable,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingBuilderAddEventFunction<GConfig extends IThingConfig> {
  <GName extends InferThingEventNames<GConfig>>(
    name: GName,
    options: DeepPartial<EventElement>,
    handler: IExposedThingBuilderAddEventHandler<GConfig, GName>,
  ): void;
}
