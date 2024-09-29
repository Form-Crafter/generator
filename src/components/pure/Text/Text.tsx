import { FC, memo } from 'react';

import { TextProps } from '_types';

export const Text: FC<TextProps> = memo(({ text }) => {
  return <div>{text}</div>;
});
