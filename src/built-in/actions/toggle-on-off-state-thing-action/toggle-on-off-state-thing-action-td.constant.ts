import { IThingActionDescription } from '../../../thing/action/thing-action.class';

export const TOGGLE_ON_OFF_STATE_THING_ACTION_TD = {
  input: {
    enum: ['on', 'off'],
  },
  output: {
    enum: ['on', 'off'],
  },
} satisfies IThingActionDescription;

export const HAVING_TOGGLE_ON_OFF_STATE_THING_ACTION_TD = {
  toggle: TOGGLE_ON_OFF_STATE_THING_ACTION_TD,
};
