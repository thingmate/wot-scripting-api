import { ThingAction } from '../../../thing/action/thing-action.class';
import { IOnOffState } from '../../shared/on-off-state/on-off-state.type';

export type IToggleOnOffStateThingAction = ThingAction<IOnOffState | null, IOnOffState>;

