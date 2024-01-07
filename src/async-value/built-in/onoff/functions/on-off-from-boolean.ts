import { IOnOff } from '../type/on-off.type';

export function onOffFromBoolean(
  state: boolean,
): IOnOff {
  return state
    ? 'on'
    : 'off';
}
