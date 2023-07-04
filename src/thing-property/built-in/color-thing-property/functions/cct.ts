import { ICW } from '../type/rgb-cw.type';

export interface ICCT {
  temperature: number; // temperature [0, 1]
  brightness: number; // brightness [0, 1]
}

export function cct_to_cw(
  {
    temperature,
    brightness,
  }: ICCT,
): ICW {
  return {
    c: temperature * brightness,
    w: (1 - temperature) * brightness,
  };
}

export function cw_to_cct(
  {
    c,
    w,
  }: ICW,
): ICCT {
  if (
    (c === 0)
    && (w === 0)
  ) {
    return {
      temperature: 0,
      brightness: 0,
    };
  } else {
    /*
      (1) c = temperature * brightness
      (2) w = (1 - temperature) * brightness

      ->(2) temperature = c / brightness
      ->(1) w = (1 - (c / brightness)) * brightness
            w = brightness - c
            brightness = c + w

      ->(2) c = temperature * (c + w)
            temperature = c / (c + w)
     */
    return {
      temperature: c / (c + w),
      brightness: c + w,
    };
  }
}

