import { IOnOffState } from './on-off-state.type';

export function getOppositeOnOffState(
  state: IOnOffState,
): IOnOffState {
  return (state === 'on')
    ? 'off'
    : 'on';
}
