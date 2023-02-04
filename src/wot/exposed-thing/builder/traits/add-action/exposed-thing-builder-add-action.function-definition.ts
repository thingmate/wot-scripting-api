import { IPromiseLikeOrValue } from '@lirx/promise';
import { ActionElement } from 'wot-thing-description-types';
import { DataSchemaValue } from 'wot-typescript-definitions';
import { IExposedThingAction } from '../../../components/action/exposed-thing-action.trait-collection';

export interface IExposedThingBuilderAddActionHandler<GIn extends DataSchemaValue, GOut extends DataSchemaValue> {
  (
    action: IExposedThingAction<GIn, GOut>,
  ): IPromiseLikeOrValue<void>;
}

export interface IExposedThingBuilderAddActionFunction {
  <GIn extends DataSchemaValue, GOut extends DataSchemaValue>(
    name: string,
    options: DeepPartial<ActionElement>,
    handler: IExposedThingBuilderAddActionHandler<GIn, GOut>,
  ): void;
}
