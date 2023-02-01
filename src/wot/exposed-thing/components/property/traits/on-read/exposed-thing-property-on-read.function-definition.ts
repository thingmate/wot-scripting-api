import { IPromiseLikeOrValue } from '@lirx/promise';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnReadFunctionHandler<GValue extends DataSchemaValue> {
  (
    options?: InteractionOptions,
  ): IPromiseLikeOrValue<GValue>;
}

export interface IExposedThingPropertyOnReadFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnReadFunctionHandler<GValue>,
  ): void;
}
