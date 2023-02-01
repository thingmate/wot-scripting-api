import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyOnReadFunction } from './exposed-thing-property-on-read.function-definition';

export interface IExposedThingPropertyOnReadTrait<GValue extends DataSchemaValue> {
  onRead: IExposedThingPropertyOnReadFunction<GValue>;
}
