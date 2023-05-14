import { IRecordConstraint } from '../../../misc/record-constraint.type';
import { IGenericThingAction } from '../thing-action.class';

export type IThingConfigActionsConstraint<GConfig> =
  [GConfig] extends [{ actions: infer GThingConfigActions }]
    ? { actions: IRecordConstraint<GThingConfigActions, string, IGenericThingAction> }
    : { actions?: void | undefined }
  ;

export type InferThingActions<GConfig extends IThingConfigActionsConstraint<GConfig>> =
  GConfig['actions'] extends undefined
    ? {}
    : GConfig['actions'];

export type InferThingActionNames<GConfig extends IThingConfigActionsConstraint<GConfig>> =
  Extract<keyof InferThingActions<GConfig>, string>;

export type InferThingActionFromName<GConfig extends IThingConfigActionsConstraint<GConfig>, GName extends InferThingActionNames<GConfig>> =
  InferThingActions<GConfig>[GName];

