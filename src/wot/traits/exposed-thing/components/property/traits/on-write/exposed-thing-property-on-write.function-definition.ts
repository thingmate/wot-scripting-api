import { IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnWriteFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingPropertyOnWriteFunctionHandler<GValue extends DataSchemaValue> {
  (
    value: GValue,
    options: IExposedThingPropertyOnWriteFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingPropertyOnWriteFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingPropertyOnWriteFunctionHandler<GValue>,
  ): void;
}
