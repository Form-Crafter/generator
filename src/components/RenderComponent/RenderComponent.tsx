import { $componentsMap } from '@services/componentsMap';
import { ComponentSchema } from '@types';
import { useUnit } from 'effector-react';
import { FC, useMemo } from 'react';

export type RenderComponentProps = {
  componentSchema: ComponentSchema;
};

// impl change data in store

// TODO check renender pure compentns on change general structure

export const RenderComponent: FC<RenderComponentProps> = ({
  componentSchema,
}) => {
  const [componentsMap] = useUnit([$componentsMap]);
  const Component = componentsMap[componentSchema.type];

  const finalProps = useMemo(
    () => ({
      ...componentSchema,
    }),
    [componentSchema]
  ) as Parameters<typeof Component>[0];

  return <Component {...finalProps} />;
};
