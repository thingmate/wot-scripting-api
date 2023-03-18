import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingObserverToAsyncIterableFunction } from './consumed-thing-observer-to-async-iterable.function-definition';

export interface IConsumedThingObserverToAsyncIterableTrait<GValue extends DataSchemaValue> {
  [Symbol.asyncIterator]: IConsumedThingObserverToAsyncIterableFunction<GValue>;
}
