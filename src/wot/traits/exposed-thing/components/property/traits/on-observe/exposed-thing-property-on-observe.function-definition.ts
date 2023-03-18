import { IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnObserveFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingPropertyOnObserveFunctionHandler<GValue extends DataSchemaValue> {
  (
    options: IExposedThingPropertyOnObserveFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingPropertyOnObserveFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnObserveFunctionHandler<GValue>,
  ): void;
}
