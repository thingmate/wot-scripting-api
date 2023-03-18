import { Abortable, IAsyncTaskInput } from '@lirx/async-task';
import { ActionElement } from 'wot-thing-description-types';
import { IExposedThing } from '../../../exposed-thing/exposed-thing.trait-collection';
import { InferExposedThingActionFromName } from '../../../exposed-thing/types/infer-exposed-thing-action-from-name.type';
import { InferThingActionNames } from '../../../thing/types/thing-actions-config.type';
import { IThingConfig } from '../../../thing/types/thing-config.type';

export interface IExposedThingBuilderAddActionHandler<GConfig extends IThingConfig, GName extends InferThingActionNames<GConfig>> {
  (
    action: InferExposedThingActionFromName<GConfig, GName>,
    thing: IExposedThing<GConfig>,
    abortable: Abortable,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingBuilderAddActionFunction<GConfig extends IThingConfig> {
  <GName extends InferThingActionNames<GConfig>>(
    name: GName,
    options: DeepPartial<ActionElement>,
    handler: IExposedThingBuilderAddActionHandler<GConfig, GName>,
  ): void;
}
