import { IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnUnobserveFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingPropertyOnUnobserveFunctionHandler<GValue extends DataSchemaValue> {
  (
    options: IExposedThingPropertyOnUnobserveFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingPropertyOnUnobserveFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnUnobserveFunctionHandler<GValue>,
  ): void;
}
