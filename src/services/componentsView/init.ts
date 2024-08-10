import { defaultComponentsView } from '@components';
import { ComponentsView, ComponentType } from '@types';
import { sample } from 'effector';

import { setComponentsViewEvent, $componentsView } from '.';

sample({
  clock: setComponentsViewEvent,
  fn: (newMap) => {
    const finalMap: Partial<ComponentsView> = {
      ...newMap,
    };

    for (const key in defaultComponentsView) {
      if (!(key in finalMap)) {
        const finalKey = key as ComponentType;
        finalMap[finalKey] = defaultComponentsView[finalKey];
      }
    }

    return finalMap as ComponentsView;
  },
  target: $componentsView,
});
