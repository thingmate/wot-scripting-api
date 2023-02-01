import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnUnobserveFunctionHandler<GValue extends DataSchemaValue> {
  (
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingPropertyOnUnobserveFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue>,
  ): void;
}
