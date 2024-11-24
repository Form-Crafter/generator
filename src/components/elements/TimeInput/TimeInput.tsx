import { forwardRef, memo, useMemo } from 'react';

import { TimeProps, MaskInputProps } from '_types';
import IMask from 'imask';

import { MaskInput } from '../MaskInput';

const TimeInputBase = forwardRef<HTMLInputElement, TimeProps>(
  ({ properties, ...props }, rootRef) => {
    const showMask = properties.showMask;

    const maskOptions: MaskInputProps['properties']['maskOptions'] = useMemo(
      () => ({
        mask: 'HH:mm',
        autofix: true,
        lazy: !showMask,
        blocks: {
          HH: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23,
            maxLength: 2,
            autofix: 'pad',
          },
          mm: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59,
            maxLength: 2,
            autofix: 'pad',
          },
        },
      }),
      [showMask]
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

TimeInputBase.displayName = 'TimeInput';

export const TimeInput = memo(TimeInputBase);
