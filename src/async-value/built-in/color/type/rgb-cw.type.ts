export interface IRGB {
  readonly r: number; // [0, 1]
  readonly g: number; // [0, 1]
  readonly b: number; // [0, 1]
}

export interface ICW {
  readonly c: number; // color [0, 1]
  readonly w: number; // warm [0, 1]
}

export interface IRGBCW extends IRGB, ICW {
}


