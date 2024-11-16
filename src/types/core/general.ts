import { maxColSpan } from '_consts/layout';

export type ResponsiveSizes<T> = {
  default: T;
  xxl?: T;
  xl?: T;
  lg?: T;
  md?: T;
  sm?: T;
};

export type ColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | typeof maxColSpan;

export type ComponentLayout = {
  col: ResponsiveSizes<ColSpan>;
};
