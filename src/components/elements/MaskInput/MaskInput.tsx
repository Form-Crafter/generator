import { forwardRef, memo, useCallback } from 'react';

import { useCombinedRefs } from '_hooks/useCombinedRefs';
import { MaskInputProps } from '_types';
import { isNotEmpty, isNotUndefined } from '_utils/typeChecking';
import { FactoryOpts, InputMask as InputMaskType } from 'imask';
import { useIMask } from 'react-imask';

import { Input } from '../Input';

// TODO
// 1. простой пример переопределиния только для указания более тонкой настрйоки
// imask - это уже будет не компонента mask, конкретный date или другой

const MaskInputBase = forwardRef<HTMLInputElement, MaskInputProps>(
  (
    {
      properties: {
        returnMaskedValue = false,
        showMask = true,
        placeholderChar = '_',
        ...properties
      },
      meta,
      onChangeProperties,
      ...props
    },
    rootRef
  ) => {
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
    } = useIMask<HTMLInputElement>(
      {
        mask: properties.mask as RegExp,
        lazy: !showMask,
        placeholderChar,
        overwrite: properties.overwrite,
        skipInvalid: properties.skipInvalid,
        eager: properties.eager,
        autofix: properties.autofix,
      },
      {
        defaultValue: properties.value,
        onAccept: handleAccept,
      }
    );

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
