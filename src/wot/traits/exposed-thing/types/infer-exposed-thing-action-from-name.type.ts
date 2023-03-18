import {
  InferThingActionNames,
  InferThingActionValueInFromName,
  InferThingActionValueOutFromName,
  IThingConfigActions,
} from '../../thing/types/thing-actions-config.type';
import { IExposedThingAction } from '../components/action/exposed-thing-action.trait-collection';

export type InferExposedThingActionFromName<GConfig extends IThingConfigActions, GName extends InferThingActionNames<GConfig>> =
  IExposedThingAction<GName, InferThingActionValueInFromName<GConfig, GName>, InferThingActionValueOutFromName<GConfig, GName>>;
