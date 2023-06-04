import { IOnOffState } from '../on-off-state.type';

export function onOffStateFromBoolean(
  state: boolean,
): IOnOffState {
  return state
    ? 'on'
    : 'off';
}
