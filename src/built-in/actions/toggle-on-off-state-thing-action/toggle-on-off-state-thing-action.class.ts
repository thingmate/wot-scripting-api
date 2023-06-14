import { IThingActionInitOptions, ThingAction } from '../../../thing/action/thing-action.class';
import { IOnOffState } from '../../shared/on-off-state/on-off-state.type';
import { TOGGLE_ON_OFF_STATE_THING_ACTION_TD } from './toggle-on-off-state-thing-action-td.constant';

export class ToggleOnOffStateThingAction extends ThingAction<IOnOffState | null, IOnOffState> {
  constructor(
    {
      description = TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
      ...options
    }: IThingActionInitOptions<IOnOffState | null, IOnOffState>,
  ) {
    super({
      description,
      ...options,
    });
  }
}

