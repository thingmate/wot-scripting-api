import { ThingAction } from '../../../thing/action/thing-action.class';
import { IOnOffState } from '../../shared/on-off-state/on-off-state.type';

export class ToggleOnOffStateThingAction extends ThingAction<IOnOffState | null, IOnOffState> {
}

