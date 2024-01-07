import { IOnOff } from '../type/on-off.type';

export function getOppositeOnOff(
  state: IOnOff,
): IOnOff {
  return (state === 'on')
    ? 'off'
    : 'on';
}

