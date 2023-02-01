import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyOnWriteFunction } from './exposed-thing-property-on-write.function-definition';

export interface IExposedThingPropertyOnWriteTrait<GValue extends DataSchemaValue> {
  onWrite: IExposedThingPropertyOnWriteFunction<GValue>;
}
