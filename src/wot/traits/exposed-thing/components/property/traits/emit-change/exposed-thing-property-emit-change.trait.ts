import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyEmitChangeFunction } from './exposed-thing-property-emit-change.function-definition';

export interface IExposedThingPropertyEmitChangeTrait<GValue extends IAsyncTaskConstraint<GValue, DataSchemaValue>> {
  emitChange: IExposedThingPropertyEmitChangeFunction<GValue>;
}
