import { ComponentsView } from './components-props';
import { ComponentSchema } from './components-schemas';
import { ResponsiveSizes } from './general';

export type SchemaLayout = {
  rowsSpanPx?: ResponsiveSizes<number>;
  colsSpanPx?: ResponsiveSizes<number>;
};

export type Schema = {
  id: string;
  version: string;
  layout?: SchemaLayout;
  components: ComponentSchema[];
};

export type GeneratorProps = {
  schema: Schema;
  componentsView?: ComponentsView;
  onSubmit: (data: Record<string, any>) => void;
};
