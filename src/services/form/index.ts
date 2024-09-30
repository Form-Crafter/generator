import { GeneratorProps } from '_types';
import { attach, createEvent, createStore } from 'effector';

export const $userSubmitHandler = createStore<
  GeneratorProps['onSubmit'] | null
>(null);

export const invokeUserSubmitHandlerFx = attach({
  source: $userSubmitHandler,
  effect: (handler, data: Parameters<GeneratorProps['onSubmit']>[0]) => {
    handler!(data);
  },
});

export const setUserSubmitHandlerEvent = createEvent<
  GeneratorProps['onSubmit']
>('setUserSubmitHandlerEvent');

export const onFormSubmitEvent = createEvent('onFormSubmitEvent');

$userSubmitHandler.on(setUserSubmitHandlerEvent, (_, handler) => handler);
