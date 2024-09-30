import '../componentsView/init';
import { sample } from 'effector';

import { onFormSubmitEvent, invokeUserSubmitHandlerFx } from '.';

sample({
  clock: onFormSubmitEvent,
  fn: () => ({ test: 'string' }),
  target: invokeUserSubmitHandlerFx,
});
