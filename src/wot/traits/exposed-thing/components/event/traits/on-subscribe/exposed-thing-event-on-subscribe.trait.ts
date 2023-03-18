import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEventOnSubscribeFunction } from './exposed-thing-event-on-subscribe.function-definition';

export interface IExposedThingEventOnSubscribeTrait<GValue extends DataSchemaValue> {
  onSubscribe: IExposedThingEventOnSubscribeFunction<GValue>;
}
