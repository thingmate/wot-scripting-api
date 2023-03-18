import {
  InferThingActionNames,
  InferThingActionValueInFromName,
  InferThingActionValueOutFromName,
  IThingConfigActions,
} from '../../thing/types/thing-actions-config.type';
import { IConsumedThingAction } from '../components/action/consumed-thing-action.trait-collection';

export type InferConsumedThingActionFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  IConsumedThingAction<GName, InferThingActionValueInFromName<GConfig, GName>, InferThingActionValueOutFromName<GConfig, GName>>;
