import { IPromiseLikeOrValue } from '@lirx/promise';
import { EventElement } from 'wot-thing-description-types';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEvent } from '../../../components/event/exposed-thing-event.trait-collection';

export interface IExposedThingBuilderAddEventHandler<GValue extends DataSchemaValue> {
  (
    event: IExposedThingEvent<GValue>,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingBuilderAddEventFunction {
  <GValue extends DataSchemaValue>(
    name: string,
    options: DeepPartial<EventElement>,
    handler: IExposedThingBuilderAddEventHandler<GValue>,
  ): void;
}
