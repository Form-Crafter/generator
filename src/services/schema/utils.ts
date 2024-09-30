import { ComponentSchema, Schema } from '_types';

export const expandComponentsTree = (
  components: Schema['components']
): Record<ComponentSchema['meta']['id'], ComponentSchema> => {
  let result: Record<ComponentSchema['meta']['id'], ComponentSchema> = {};

  components.forEach((comp) => {
    if (
      'components' in comp.properties &&
      comp.properties?.components?.length
    ) {
      const subComponents = comp.properties.components;
      const subResult = expandComponentsTree(subComponents);
      result = { ...result, [comp.meta.id]: comp, ...subResult };
    } else {
      result[comp.meta.id] = comp;
    }
  });

  return result;
};
