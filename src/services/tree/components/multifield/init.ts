import { $componentsData, componentsDataForSettingEvent } from '_services/tree';
import { TreeNode } from '_types/components';
import { MultifieldComponentSchema } from '_types/core';
import { expandSchemaIntoParts, genGroupComponentSchema } from '_utils';
import { removeObjectKeys } from '_utils/removeObjectKeys';
import {
  collectAllTreeIds,
  insertNodeInTree,
  removeNodeAndReturn,
} from '_utils/tree';
import { sample } from 'effector';

import { addMultifieldGroupEvent, removeMultifieldGroupEvent } from '.';

sample({
  clock: addMultifieldGroupEvent,
  source: $componentsData,
  fn: (data, { id: multifieldId }) => {
    const { groupTitle, template } = data.properties[
      multifieldId
    ] as MultifieldComponentSchema['properties'];

    const newGroup = genGroupComponentSchema({
      title: groupTitle,
      components: template,
    });
    const newComponentsData = expandSchemaIntoParts([newGroup]);
    const newNode: TreeNode = {
      ...newComponentsData.tree[0],
      parentId: multifieldId,
    };

    const finalTree = insertNodeInTree(data.tree, newNode, multifieldId);

    return {
      tree: finalTree,
      meta: {
        ...data.meta,
        ...newComponentsData.meta,
      },
      properties: {
        ...data.properties,
        ...newComponentsData.properties,
      },
      validation: {
        ...data.validation,
        ...newComponentsData.validation,
      },
      relations: {
        ...data.relations,
        ...newComponentsData.relations,
      },
    };
  },
  target: componentsDataForSettingEvent,
});

sample({
  clock: removeMultifieldGroupEvent,
  source: $componentsData,
  fn: (data, { groupId }) => {
    const { tree: finalTree, node: removedNode } = removeNodeAndReturn(
      data.tree,
      groupId
    );
    const idsToRemove = collectAllTreeIds([removedNode]);

    const meta = removeObjectKeys(data.meta, idsToRemove);
    const properties = removeObjectKeys(data.properties, idsToRemove);
    const validation = removeObjectKeys(data.validation, idsToRemove);
    const relations = removeObjectKeys(data.relations, idsToRemove);

    return {
      tree: finalTree,
      meta,
      properties,
      validation,
      relations,
    };
  },
  target: componentsDataForSettingEvent,
});
