import { forwardRef, memo, useCallback } from 'react';

import { useCombinedRefs } from '_hooks/useCombinedRefs';
import { MaskInputProps } from '_types';
import { isNotEmpty, isNotUndefined } from '_utils/typeChecking';
import { FactoryOpts, InputMask as InputMaskType } from 'imask';
import { useIMask } from 'react-imask';

import { Input } from '../Input';

// 2. async set value ВЕЗДЕ ПРОВЕРИТЬ
// Латинские буквы, цифры и нижнее подчеркивание.
// можно ли сделать n.nn формат?

const MaskInputBase = forwardRef<HTMLInputElement, MaskInputProps>(
  (
    {
      properties: { maskOptions, ...properties },
      meta,
      onChangeProperties,
      ...props
    },
    rootRef
  ) => {
    const { returnMaskedValue } = maskOptions;

    const handleAccept = useCallback(
      (
        value: string,
        maskRef: InputMaskType<FactoryOpts>,
        event?: InputEvent
      ) => {
        if (event?.target) {
          const finalValue = returnMaskedValue ? value : maskRef.unmaskedValue;
          onChangeProperties({ value: finalValue });
        }
      },
      [onChangeProperties, returnMaskedValue]
    );

    const {
      ref,
      value: maskedValue,
      setValue,
    } = useIMask<HTMLInputElement>(maskOptions, {
      defaultValue: properties.value,
      onAccept: handleAccept,
    });

    const handleChange = useCallback<typeof onChangeProperties>(
      ({ value, ...params }) => {
        if (isNotUndefined(value)) {
          setValue(value);
        }
        if (isNotEmpty(params)) {
          onChangeProperties(params);
        }
      },
      [setValue, onChangeProperties]
    );

    const refs = useCombinedRefs(ref, rootRef);

    return (
      <Input
        ref={refs}
        {...props}
        meta={{ ...meta, componentType: 'input' }}
        properties={{ ...properties, value: maskedValue }}
        onChangeProperties={handleChange}
      />
    );
  }
);

MaskInputBase.displayName = 'MaskInput';

export const MaskInput = memo(MaskInputBase);
