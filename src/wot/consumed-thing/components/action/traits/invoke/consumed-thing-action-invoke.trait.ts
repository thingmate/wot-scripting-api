import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingActionInvokeFunction } from './consumed-thing-action-invoke.function-definition';

export interface IConsumedThingActionInvokeTrait<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  invoke: IConsumedThingActionInvokeFunction<GIn, GOut>;
}
