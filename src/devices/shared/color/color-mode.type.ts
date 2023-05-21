import { IHSVColor } from '@lifaon/color';

export interface IColorModeCCT {
  mode: 'cct';
  brightness: number; // [0, 1]
  temperature: number; // in Kelvin
}

export interface IColorHSV extends IHSVColor {
  mode: 'hsv';
}

// export interface IColorOff {
//   mode: 'off';
// }

export type IColorMode =
  | IColorHSV
  | IColorModeCCT
  ;

