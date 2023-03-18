import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingPropertyOnUnobserveFunction } from './exposed-thing-property-on-unobserve.function-definition';

export interface IExposedThingPropertyOnUnobserveTrait<GValue extends DataSchemaValue> {
  onUnobserve: IExposedThingPropertyOnUnobserveFunction<GValue>;
}
