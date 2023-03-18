import { IAsyncTaskConstraint } from '@lirx/async-task';
import { DataSchemaValue } from 'wot-typescript-definitions';

export type IThingActionInType = DataSchemaValue | undefined;
export type IThingActionOutType = DataSchemaValue | undefined;

export type IThingActionValueConfig = [
  IThingActionInType, // in
  IThingActionOutType, // out
];

export type IThingActionsConfig = Record<string, IThingActionValueConfig>;

export interface IThingConfigActions {
  actions?: IThingActionsConfig;
}

export type InferThingActions<GConfig extends IThingConfigActions> =
  GConfig['actions'] extends undefined
    ? {}
    : GConfig['actions'];

export type InferThingActionNames<GConfig extends IThingConfigActions> =
  Extract<keyof InferThingActions<GConfig>, string>;

export type InferThingActionValueFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  InferThingActions<GConfig>[GName] extends IThingActionValueConfig
    ? InferThingActions<GConfig>[GName]
    : never;

export type InferThingActionValueInFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  InferThingActionValueFromName<GConfig, GName>[0];

export type InferThingActionValueOutFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  IAsyncTaskConstraint<InferThingActionValueFromName<GConfig, GName>[1]>;
// IAsyncTaskConstraint<InferThingActionValueFromName<GConfig, GName>[1]>;

