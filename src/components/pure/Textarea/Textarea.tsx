import { FC, memo } from 'react';
import { TextareaAutosize as TextareaBase } from '@mui/material';
import { TextareaFieldComponent } from '@types';

export type TextareaProps = TextareaFieldComponent;

export const Textarea: FC<TextareaProps> = memo(({ value }) => {
  return <TextareaBase value={value} />;
});
