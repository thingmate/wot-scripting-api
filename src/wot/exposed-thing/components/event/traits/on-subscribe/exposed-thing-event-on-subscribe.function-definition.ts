import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingEventOnSubscribeFunctionHandler<GValue extends DataSchemaValue> {
  (
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingEventOnSubscribeFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingEventOnSubscribeFunctionHandler<GValue>,
  ): void;
}
