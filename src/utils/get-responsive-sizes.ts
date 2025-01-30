import { ViewNode } from '@form-crafter/core'

type Col = ViewNode['layout']['col']

export const getResponsiveLayoutSizes = (col: Col): Required<Col> => {
    const { default: def, xxl, xl, lg, md, sm } = col
    return {
        default: def,
        xxl: xxl ?? def,
        xl: xl ?? xxl ?? def,
        lg: lg ?? xl ?? xxl ?? def,
        md: md ?? lg ?? xl ?? xxl ?? def,
        sm: sm ?? md ?? lg ?? xl ?? xxl ?? def,
    }
}
