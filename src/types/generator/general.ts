export type ComponentType =
  | 'input-field'
  | 'email-field'
  | 'phone-field'
  | 'textarea-field'
  | 'select-field'
  | 'checkbox-field'
  | 'radio-field'
  | 'text'
  | 'button'
  | 'group';

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
  | 24;

export type ComponentLayout = {
  col: ResponsiveSizes<ColSpan>;
};
