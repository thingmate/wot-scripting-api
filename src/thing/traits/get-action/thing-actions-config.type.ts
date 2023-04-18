import { IGenericThingAction } from '../../components/action/thing-action.trait-collection';

export type IThingActionsConfig = Record<string, IGenericThingAction>;

export interface IThingConfigActions {
  actions?: IThingActionsConfig;
}

export type InferThingActions<GConfig extends IThingConfigActions> =
  GConfig['actions'] extends undefined
    ? {}
    : GConfig['actions'];

export type InferThingActionNames<GConfig extends IThingConfigActions> =
  Extract<keyof InferThingActions<GConfig>, string>;

export type InferThingActionFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  InferThingActions<GConfig>[GName];
