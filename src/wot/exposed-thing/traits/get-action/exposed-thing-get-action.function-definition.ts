import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingAction } from '../../components/action/exposed-thing-action.trait-collection';

export interface IExposedThingGetActionFunction {
  <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
  ): IExposedThingAction<GIn, GOut>;
}
