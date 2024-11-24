import { defaultComponentsView } from '_components';
import { ComponentsView } from '_types';
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
        finalMap[key] = defaultComponentsView[key];
      }
    }

    return finalMap as ComponentsView;
  },
  target: $componentsView,
});
