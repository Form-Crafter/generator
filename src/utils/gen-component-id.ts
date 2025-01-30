import { ComponentId } from '@form-crafter/core'

import { genId } from './gen-id'

export const genComponentId = (prefix: string): ComponentId => genId({ prefix })
