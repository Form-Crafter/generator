import { FC, memo } from 'react';
import { Component, SchemaLayout } from '@types';
import { RenderComponentProps } from '../RenderComponent';
import { WrapperComponent } from '../WrapperComponent';
import styles from './styles.module.sass';
import { $schema } from '@services/index';
import { useUnit } from 'effector-react';

export type RenderComponentsGridProps = {
  components: Component[];
  renderComponent: FC<RenderComponentProps>;
  id?: string;
};

const defaultLayout: SchemaLayout = {
  rowsSpanPx: { default: 16 },
  colsSpanPx: { default: 16 },
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ renderComponent: RenderComponent, components, id }) => {
    const [schema] = useUnit([$schema]);
    const { layout } = schema;
    const layoutStyle = {
      gap: `${layout?.colsSpanPx || defaultLayout.colsSpanPx}px ${layout?.rowsSpanPx || defaultLayout.rowsSpanPx}px`,
    };

    return (
      <div id={id} className={styles.root} style={layoutStyle}>
        {components.map((component) => (
          <WrapperComponent key={component.id} layout={component.layout}>
            <RenderComponent component={component} />
          </WrapperComponent>
        ))}
      </div>
    );
  }
);
