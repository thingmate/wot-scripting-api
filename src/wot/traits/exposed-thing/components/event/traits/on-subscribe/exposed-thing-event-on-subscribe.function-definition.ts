import { IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { DataSchemaValue, InteractionOptions } from 'wot-typescript-definitions';

export interface IExposedThingEventOnSubscribeFunctionHandlerOptions<GValue extends DataSchemaValue> extends InteractionOptions, IAbortableOptions {
}

export interface IExposedThingEventOnSubscribeFunctionHandler<GValue extends DataSchemaValue> {
  (
    options: IExposedThingEventOnSubscribeFunctionHandlerOptions<GValue>,
  ): IAsyncTaskInput<void>;
}

export interface IExposedThingEventOnSubscribeFunction<GValue extends DataSchemaValue> {
  (
    handler: IExposedThingEventOnSubscribeFunctionHandler<GValue>,
  ): void;
}
