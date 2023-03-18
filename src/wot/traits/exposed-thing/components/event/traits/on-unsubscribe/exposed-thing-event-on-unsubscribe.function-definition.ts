import { IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingEventOnUnsubscribeFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingEventOnUnsubscribeFunctionHandler<GValue extends DataSchemaValue> {
  (
    options: IExposedThingEventOnUnsubscribeFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingEventOnUnsubscribeFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingEventOnUnsubscribeFunctionHandler<GValue>,
  ): void;
}
