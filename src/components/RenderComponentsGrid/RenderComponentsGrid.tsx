import { FC, memo } from 'react';
import { Component } from '@types';
import { RenderComponentProps } from '../RenderComponent';
import { WrapperComponent } from '../WrapperComponent';
import styles from './styles.module.sass';

export type RenderComponentsGridProps = {
  components: Component[];
  renderComponent: FC<RenderComponentProps>;
  id?: string;
  className?: string;
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ renderComponent: RenderComponent, components, id }) => {
    return (
      <div id={id} className={styles.root}>
        {components.map((component) => (
          <WrapperComponent
            key={component.id}
            componentType={component.type}
            layout={component.layout}
          >
            <RenderComponent component={component} />
          </WrapperComponent>
        ))}
      </div>
    );
  }
);
