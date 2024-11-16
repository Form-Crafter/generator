import { ChangeEvent, forwardRef, memo, useCallback } from 'react';

import { useCombinedRefs } from '_hooks/useCombinedRefs';
import { MaskInputProps } from '_types';
import { isNotEmpty, isNotUndefined } from '_utils/typeChecking';
import { FactoryOpts, InputMask as InputMaskType } from 'imask';
import { useIMask } from 'react-imask';

import { Input } from '../Input';

// TODO
// 1. простой пример переопределиния только для указания более тонкой настрйоки
// imask - это уже будет не компонента mask, конкретный date или другой
// 2. проверить работу в принципе и работу lazy/placeholderChar с regv и string маской

const MaskInputBase = forwardRef<HTMLInputElement, MaskInputProps>(
  (
    {
      properties: { returnValueType, ...properties },
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
          const changeEvent = event as unknown as ChangeEvent<HTMLInputElement>;
          let returnValue = maskRef.unmaskedValue;

          if (returnValueType === 'masked') {
            returnValue = value;
          } else if (returnValueType === 'typed') {
            returnValue = maskRef.typedValue;
          }

          changeEvent.target.value = returnValue;
          onChangeProperties({ value: returnValue });
        }
      },
      [onChangeProperties, returnValueType]
    );

    const {
      ref,
      value: maskedValue,
      setValue,
    } = useIMask<HTMLInputElement>(
      {
        mask: properties.mask as RegExp,
        lazy: properties.lazy,
        placeholderChar: properties.placeholderChar,
        autofix: properties.autofix,
        overwrite: properties.overwrite,
        skipInvalid: properties.skipInvalid,
        eager: properties.eager,
      },
      {
        defaultValue: properties.value.toString() ?? '',
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
