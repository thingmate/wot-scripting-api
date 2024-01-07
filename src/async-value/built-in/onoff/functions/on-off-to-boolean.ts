import { IOnOff } from '../type/on-off.type';

export function onOffToBoolean(
  state: IOnOff,
): boolean {
  return (state === 'on');
}
