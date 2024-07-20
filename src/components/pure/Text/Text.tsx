import { FC, memo } from 'react';
import { TextComponent } from '@types';

export type TextProps = TextComponent;

export const Text: FC<TextProps> = memo(({ text }) => {
  return <div>{text}</div>;
});
