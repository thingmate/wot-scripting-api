import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyOnObserveFunction } from './exposed-thing-property-on-observe.function-definition';

export interface IExposedThingPropertyOnObserveTrait<GValue extends DataSchemaValue> {
  onObserve: IExposedThingPropertyOnObserveFunction<GValue>;
}
