import { DataSchemaValue } from 'wot-typescript-definitions';

export interface IConsumedThingObserverToAsyncIterableFunction<GValue extends DataSchemaValue> {
  (): AsyncIterableIterator<GValue>;
}
