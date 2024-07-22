import { FC, PropsWithChildren, memo } from 'react';
import { ComponentLayout } from '@types';
import styles from './styles.module.sass';

export type WrapperComponentProps = PropsWithChildren<{
  layout: ComponentLayout;
}>;

export const WrapperComponent: FC<WrapperComponentProps> = memo(
  ({ children, layout }) => {
    const { col } = layout;

    return (
      <div
        className={styles.root}
        style={{ gridColumn: `span ${col.default}` }}
        data-xxl={col.xxl}
        data-xl={col.xl}
        data-lg={col.lg}
        data-md={col.md}
        data-sm={col.sm}
      >
        {children}
      </div>
    );
  }
);
