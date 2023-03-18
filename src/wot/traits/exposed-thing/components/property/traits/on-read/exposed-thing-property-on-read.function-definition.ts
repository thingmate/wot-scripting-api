import { IAbortableOptions, IAsyncTaskConstraint, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingPropertyOnReadFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingPropertyOnReadFunctionHandler<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  (
    options: IExposedThingPropertyOnReadFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<GValue>;
}

export interface IExposedThingPropertyOnReadFunction<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  (
    handler: IExposedThingPropertyOnReadFunctionHandler<GValue>,
  ): void;
}
