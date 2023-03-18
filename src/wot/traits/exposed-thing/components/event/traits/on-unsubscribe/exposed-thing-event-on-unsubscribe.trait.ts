import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEventOnUnsubscribeFunction } from './exposed-thing-event-on-unsubscribe.function-definition';

export interface IExposedThingEventOnUnsubscribeTrait<GValue extends DataSchemaValue> {
  onUnsubscribe: IExposedThingEventOnUnsubscribeFunction<GValue>;
}
