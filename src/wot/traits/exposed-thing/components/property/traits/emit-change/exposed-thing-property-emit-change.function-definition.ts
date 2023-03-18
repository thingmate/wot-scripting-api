import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';

export interface IExposedThingPropertyEmitChangeFunction<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  (
    value?: GValue,
  ): void;
}
