import { IOnOffState } from './on-off-state.type';

export function onOffStateToBoolean(
  state: IOnOffState,
): boolean {
  return (state === 'on');
}
