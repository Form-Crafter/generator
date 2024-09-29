import { ComponentLayout } from '_types';

export const getResponsiveLayoutSizes = (
  col: ComponentLayout['col']
): Required<ComponentLayout['col']> => {
  const { default: def, xxl, xl, lg, md, sm } = col;
  return {
    default: def,
    xxl: xxl ?? def,
    xl: xl ?? xxl ?? def,
    lg: lg ?? xl ?? xxl ?? def,
    md: md ?? lg ?? xl ?? xxl ?? def,
    sm: sm ?? md ?? lg ?? xl ?? xxl ?? def,
  };
};
