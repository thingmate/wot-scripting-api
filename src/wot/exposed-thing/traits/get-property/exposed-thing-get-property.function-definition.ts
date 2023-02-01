import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingProperty } from '../../components/property/esposed-thing-property.trait-collection';

export interface IExposedThingGetPropertyFunction {
  <GValue extends DataSchemaValue>(
    name: string,
  ): IExposedThingProperty<GValue>;
}
