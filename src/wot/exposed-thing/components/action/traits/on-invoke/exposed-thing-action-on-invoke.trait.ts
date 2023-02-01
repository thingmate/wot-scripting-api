import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingActionOnInvokeFunction } from './exposed-thing-action-on-invoke.function-definition';

export interface IExposedThingActionOnInvokeTrait<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  onInvoke: IExposedThingActionOnInvokeFunction<GIn, GOut>;
}
