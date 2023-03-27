export interface colorPaletteInterface {
  setPaletteIsOpen: Function;
  setBodyPart: Function;
  bodyPart: any;
  partIndex: string;
}

export interface ColorMap {
  [key: string]: (hue: string) => string;
}
