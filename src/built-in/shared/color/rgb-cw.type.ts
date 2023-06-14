
export interface IRGB {
  r: number; // [0, 1]
  g: number; // [0, 1]
  b: number; // [0, 1]
}

export interface ICW {
  c: number; // color [0, 1]
  w: number; // warm [0, 1]
}

export interface IRGBCW extends IRGB, ICW {
}


