import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingEventObserveFunction } from './consumed-thing-event-observe.function-definition';

export interface IConsumedThingEventObserveTrait<GValue extends DataSchemaValue> {
  observe: IConsumedThingEventObserveFunction<GValue>;
}
