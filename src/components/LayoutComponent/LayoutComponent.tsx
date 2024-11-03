import { FC, PropsWithChildren, memo } from 'react';

import { useComponentMeta } from '_services/tree/hooks';
import { ComponentLayout, ComponentSchema } from '_types';
import { getResponsiveLayoutSizes, getStyles } from '_utils';
import cn from 'classnames';

import styles from './styles.module.sass';

const getStyleVariables = (col: ComponentLayout['col']) => {
  const finalCol = getResponsiveLayoutSizes(col);
  return getStyles({
    '--colDefault': finalCol.default,
    '--colXxl': finalCol.xxl,
    '--colXl': finalCol.xl,
    '--colLg': finalCol.lg,
    '--colMd': finalCol.md,
    '--colSm': finalCol.sm,
  });
};

export type LayoutComponentProps = PropsWithChildren<{
  id: ComponentSchema['meta']['id'];
}>;

export const LayoutComponent: FC<LayoutComponentProps> = memo(
  ({ id, children }) => {
    const { layout, componentType } = useComponentMeta(id);

    const style = getStyleVariables(layout.col);

    return (
      <div
        className={cn(styles.root, {
          [styles.withoutVerticalGap]: componentType === 'group',
        })}
        style={style}
      >
        {children}
      </div>
    );
  }
);
