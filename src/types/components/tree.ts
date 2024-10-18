import { ComponentSchema } from '../core';

type Id = ComponentSchema['meta']['id'];

export type ComponentsTree = {
  id: Id;
  parentId?: Id | null;
  childTree?: ComponentsTree;
}[];

export type ComponentsPropertiesData = Record<Id, any>;

export type ComponentsMetaData = Record<Id, ComponentSchema['meta']>;

export type ComponentsValidationData = Record<
  Id,
  NonNullable<ComponentSchema['validation']>
>;

export type ComponentsRelationsData = Record<
  Id,
  Required<ComponentSchema['relations']>
>;
