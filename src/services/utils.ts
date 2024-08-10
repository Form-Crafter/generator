import { ComponentSchema, Schema } from '@types';

export const expandComponentsTree = (
  components: Schema['components']
): Record<ComponentSchema['id'], ComponentSchema> => {
  let result: Record<ComponentSchema['id'], ComponentSchema> = {};

  components.forEach((comp) => {
    if ('components' in comp && comp.components) {
      const subComponents = comp.components;
      const subResult = expandComponentsTree(subComponents);
      result = { ...result, [comp.id]: comp, ...subResult };
    } else {
      result[comp.id] = comp;
    }
  });

  return result;
};
