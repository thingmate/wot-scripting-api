import { ThingAction } from '../../../../thing/action/thing-action.class';
import { IOnOffState } from '../on-off-state.type';

export type IToggleOnOffStateThingAction = ThingAction<IOnOffState | null, IOnOffState>;

export interface IHavingToggleOnOffStateThingAction {
  toggle: IToggleOnOffStateThingAction;
}

export const TOGGLE_ON_OFF_STATE_THING_ACTION_TD = {
  toggle: {
    input: {
      enum: ['on', 'off'],
    },
    output: {
      enum: ['on', 'off'],
    },
  },
};
