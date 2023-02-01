import { DataSchemaValue } from 'wot-typescript-definitions';
import { IConsumedThingAction } from '../../components/action/comsumed-thing-action.trait-collection';

export interface IConsumedThingGetActionFunction {
  <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
  ): IConsumedThingAction<GIn, GOut>;
}
