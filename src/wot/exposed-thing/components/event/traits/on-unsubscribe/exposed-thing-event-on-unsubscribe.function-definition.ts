import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingEventOnUnsubscribeFunctionHandler<GValue extends DataSchemaValue> {
  (
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingEventOnUnsubscribeFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingEventOnUnsubscribeFunctionHandler<GValue>,
  ): void;
}
