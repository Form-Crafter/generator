import { sample } from 'effector';
import { setComponentsMapEvent, $componentsMap } from '.';
import { ComponentsMap, ComponentType } from '@types';
import { defaultComponentsMap } from '@consts';

sample({
  clock: setComponentsMapEvent,
  fn: (newMap) => {
    const finalMap: Partial<ComponentsMap> = {
      ...newMap,
    };

    for (const key in defaultComponentsMap) {
      if (!(key in finalMap)) {
        const finalKey = key as ComponentType;
        finalMap[finalKey] = defaultComponentsMap[finalKey];
      }
    }

    return finalMap as ComponentsMap;
  },
  target: $componentsMap,
});
