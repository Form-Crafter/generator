import {
  GroupComponentSchema,
  ComponentSchemaOptionalId,
  ComponentType,
  ComponentSchema,
} from '_types/core';
import { genComponentId } from '_utils/genComponentId';
import { getInitialLayoutComponent } from '_utils/layout';

const genMeta = <T extends ComponentType>(
  componentType: T,
  initialMeta: Partial<
    Extract<ComponentSchemaOptionalId, { meta: { componentType: T } }>['meta']
  > = {}
) => ({
  ...initialMeta,
  componentType,
  id: initialMeta.id ?? genComponentId(componentType),
  layout: initialMeta.layout || getInitialLayoutComponent(),
});

type GenGroupComponentSchemaParams = {
  title?: Required<GroupComponentSchema>['properties']['title'];
  components: ComponentSchemaOptionalId[];
};
export const genGroupComponentSchema = ({
  title,
  components,
}: GenGroupComponentSchemaParams): GroupComponentSchema => ({
  meta: genMeta('group'),
  properties: { title },
  components: components.map(
    (schema) =>
      ({
        ...schema,
        meta: genMeta(schema.meta.componentType, schema.meta),
      }) as ComponentSchema
  ),
});
