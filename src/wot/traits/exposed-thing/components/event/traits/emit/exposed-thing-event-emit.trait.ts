import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingEventEmitFunction } from './exposed-thing-event-emit.function-definition';

export interface IExposedThingEventEmitTrait<GValue extends DataSchemaValue> {
  emit: IExposedThingEventEmitFunction<GValue>;
}
