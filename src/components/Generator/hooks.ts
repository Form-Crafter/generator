import { SchemaLayout, Schema } from '_types';

import { defaultLayout } from './consts';
import { getStyleVariables } from './utils';

export const useGeneratorStylesVars = (schemaLayout: Schema['layout']) => {
  const finalSchemaLayout: Required<SchemaLayout> = {
    rowsSpanPx: schemaLayout?.rowsSpanPx || defaultLayout.rowsSpanPx,
    colsSpanPx: schemaLayout?.colsSpanPx || defaultLayout.colsSpanPx,
  };

  return getStyleVariables(finalSchemaLayout);
};
