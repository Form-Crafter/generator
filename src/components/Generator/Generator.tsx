import { $schema, setFullSchemaEvent } from '@services';
import { Schema, SchemaLayout } from '@types';
import { FC, memo, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { RenderComponent } from '../RenderComponent';
import { RenderComponentsGrid } from '../RenderComponentsGrid';
import styles from './styles.module.sass';
import { getStyles } from '@utils/index';

const defaultLayout: Required<SchemaLayout> = {
  rowsSpanPx: { default: 16 },
  colsSpanPx: { default: 16 },
};

const getStyleVariables = (schemaLayout: Required<SchemaLayout>) =>
  getStyles({
    '--schemaLayoutRowsSpanDefault': `${schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutRowsSpanXxl': `${schemaLayout.rowsSpanPx.xxl || schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutRowsSpanXl': `${schemaLayout.rowsSpanPx.xl || schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutRowsSpanLg': `${schemaLayout.rowsSpanPx.lg || schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutRowsSpanMd': `${schemaLayout.rowsSpanPx.md || schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutRowsSpanSm': `${schemaLayout.rowsSpanPx.sm || schemaLayout.rowsSpanPx.default}px`,
    '--schemaLayoutColsSpanDefault': `${schemaLayout.colsSpanPx.default}px`,
    '--schemaLayoutColsSpanXxl': `${schemaLayout.colsSpanPx.xxl || schemaLayout.colsSpanPx.default}px`,
    '--schemaLayoutColsSpanXl': `${schemaLayout.colsSpanPx.xl || schemaLayout.colsSpanPx.default}px`,
    '--schemaLayoutColsSpanLg': `${schemaLayout.colsSpanPx.lg || schemaLayout.colsSpanPx.default}px`,
    '--schemaLayoutColsSpanMd': `${schemaLayout.colsSpanPx.md || schemaLayout.colsSpanPx.default}px`,
    '--schemaLayoutColsSpanSm': `${schemaLayout.colsSpanPx.sm || schemaLayout.colsSpanPx.default}px`,
  });

type GeneratorProps = {
  schema: Schema;
};

export const Generator: FC<GeneratorProps> = memo(
  ({ schema: initialSchema }) => {
    const [schema] = useUnit([$schema]);

    useEffect(() => {
      setFullSchemaEvent(initialSchema);
    }, [initialSchema]);

    const finalSchemaLayout: Required<SchemaLayout> = {
      rowsSpanPx: schema?.layout?.rowsSpanPx || defaultLayout.rowsSpanPx,
      colsSpanPx: schema?.layout?.colsSpanPx || defaultLayout.colsSpanPx,
    };

    const style = getStyleVariables(finalSchemaLayout);

    return (
      <div className={styles.root} style={style}>
        <RenderComponentsGrid
          id={schema.id}
          renderComponent={RenderComponent}
          components={schema.components}
        />
      </div>
    );
  }
);
