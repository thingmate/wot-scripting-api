import { ISmartPlugState } from './smart-plug-state.type';

export function getOppositeSmartPlugState(
  state: ISmartPlugState,
): ISmartPlugState {
  return (state === 'on')
    ? 'off'
    : 'on';
}
