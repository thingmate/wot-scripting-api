import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnWriteFunctionHandler<GValue extends DataSchemaValue> {
  (
    value: GValue,
    options?: InteractionOptions
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingPropertyOnWriteFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnWriteFunctionHandler<GValue>,
  ): void;
}
