import { IRGBCW } from '../type/rgb-cw.type';

export function are_rgbcw_equal(
  a: IRGBCW,
  b: IRGBCW,
): boolean {
  return (a.r === b.r)
    && (a.g === b.g)
    && (a.b === b.b)
    && (a.c === b.c)
    && (a.w === b.w);
}
