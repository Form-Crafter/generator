import { forwardRef, memo, useMemo } from 'react';

import { DateProps, MaskInputProps } from '_types';
import IMask from 'imask';

import { MaskInput } from '../MaskInput';

const defaultPattern = 'DD.MM.YYYY';

const DateInputBase = forwardRef<HTMLInputElement, DateProps>(
  ({ properties, ...props }, rootRef) => {
    const pattern = properties.pattern || defaultPattern;
    const showMask = properties.showMask;

    const maskOptions: MaskInputProps['properties']['maskOptions'] = useMemo(
      () => ({
        mask: Date,
        pattern,
        min: new Date(1900, 0, 1),
        max: new Date(2100, 0, 1),
        autofix: true,
        lazy: !showMask,
        blocks: {
          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
            autofix: 'pad',
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
            autofix: 'pad',
          },
          YYYY: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 2150,
            autofix: true,
          },
        },
      }),
      [pattern, showMask]
    );

    return (
      <MaskInput
        ref={rootRef}
        {...props}
        properties={{ ...properties, maskOptions }}
        meta={{ ...props.meta, componentType: 'mask-input' }}
      />
    );
  }
);

DateInputBase.displayName = 'DateInput';

export const DateInput = memo(DateInputBase);
