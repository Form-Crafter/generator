import {
  ComponentsMetaData,
  ComponentsPropertiesData,
  ComponentsRelationsData,
  ComponentsTree,
  ComponentsValidationData,
} from '_types/components';
import { Schema } from '_types/core';
import { isNotUndefined } from '_utils';
import { sample } from 'effector';

import {
  setFullSchemaEvent,
  expandSchemaToStoresEvent,
  $componentsTree,
  $componentsPropertiesData,
  $componentsValidationData,
  $componentsRelationsData,
  $componentsMetaData,
} from '.';

sample({
  clock: setFullSchemaEvent,
  fn: (schema) => {
    const properties: ComponentsPropertiesData = {};
    const meta: ComponentsMetaData = {};
    const validation: ComponentsValidationData = {};
    const relations: ComponentsRelationsData = {};

    const getTreeAndFillData = (
      parentId: ComponentsTree[0]['parentId'],
      components: Schema['components']
    ): ComponentsTree => {
      const result: ComponentsTree = [];

      components.forEach((comp) => {
        const node: ComponentsTree[0] = { id: comp.meta.id, parentId };

        const hasChildren = 'components' in comp && comp.components.length;
        if (hasChildren) {
          node.childTree = getTreeAndFillData(node.id, comp.components);
        }

        meta[node.id] = comp.meta;
        if ('properties' in comp) {
          properties[node.id] = comp.properties;
        }
        if ('validation' in comp && isNotUndefined(comp.validation)) {
          validation[node.id] = comp.validation;
        }
        if ('relations' in comp && isNotUndefined(comp.relations)) {
          relations[node.id] = comp.relations;
        }

        result.push(node);
      });

      return result;
    };

    const tree = getTreeAndFillData(null, schema.components);

    return {
      tree,
      properties,
      meta,
      validation,
      relations,
    };
  },
  target: expandSchemaToStoresEvent,
});

sample({
  clock: expandSchemaToStoresEvent,
  fn: ({ tree }) => tree,
  target: $componentsTree,
});

sample({
  clock: expandSchemaToStoresEvent,
  fn: ({ properties }) => properties,
  target: $componentsPropertiesData,
});

sample({
  clock: expandSchemaToStoresEvent,
  fn: ({ validation }) => validation,
  target: $componentsValidationData,
});

sample({
  clock: expandSchemaToStoresEvent,
  fn: ({ relations }) => relations,
  target: $componentsRelationsData,
});

sample({
  clock: expandSchemaToStoresEvent,
  fn: ({ meta }) => meta,
  target: $componentsMetaData,
});
