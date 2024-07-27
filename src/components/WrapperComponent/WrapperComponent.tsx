import { FC, PropsWithChildren, memo } from 'react';
import { ComponentLayout, ComponentType } from '@types';
import styles from './styles.module.sass';
import { getResponsiveLayoutSizes, getStyles } from '@utils';
import cn from 'classnames';

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

export type WrapperComponentProps = PropsWithChildren<{
  layout: ComponentLayout;
  componentType: ComponentType;
}>;

export const WrapperComponent: FC<WrapperComponentProps> = memo(
  ({ children, layout, componentType }) => {
    const style = getStyleVariables(layout.col);

    return (
      <div
        className={cn(styles.root, {
          [styles.withoutVerticalGap]: componentType === ComponentType.Group,
        })}
        style={style}
      >
        {children}
      </div>
    );
  }
);
