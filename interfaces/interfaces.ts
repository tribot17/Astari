export interface colorPaletteInterface {
  setPaletteIsOpen: Function;
  setBodyPart: Function;
  bodyPart: any;
  partIndex: string;
}

export interface ColorMap {
  [key: string]: (hue: string) => string;
}

export interface colorsPart {
  head: { color: string; text: string }[];
  hair: { color: string; text: string }[];
  eyes: { color: string; text: string }[];
  nose: { color: string; text: string }[];
  mouth: { color: string; text: string }[];
  beard: { color: string; text: string }[];
  [key: string]: { color: string; text: string }[];
}
