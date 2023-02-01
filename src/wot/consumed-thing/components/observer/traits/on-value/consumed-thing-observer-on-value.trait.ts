import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingObserverOnValueFunction } from './consumed-thing-observer-on-value.function-definition';

export interface IConsumedThingObserverOnValueTrait<GValue extends DataSchemaValue> {
  onValue: IConsumedThingObserverOnValueFunction<GValue>;
}
