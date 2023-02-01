import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnObserveFunctionHandler<GValue extends DataSchemaValue> {
  (
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingPropertyOnObserveFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnObserveFunctionHandler<GValue>,
  ): void;
}
