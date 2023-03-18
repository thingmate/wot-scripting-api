import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingObserverToObservableFunction } from './consumed-thing-observer-to-observable.function-definition';

export interface IConsumedThingObserverToObservableTrait<GValue extends DataSchemaValue> {
  toObservable: IConsumedThingObserverToObservableFunction<GValue>;
}
