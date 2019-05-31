import { compose, fontFamily , fontSize, 
  fontWeight, lineHeight, space} from 'styled-system'
import { jsx as emotion } from '@emotion/core'
import css from '@styled-system/css'

export const typography = compose(fontFamily, fontSize, fontWeight, 
                                  lineHeight, space);


export const jsx = (type, props, ...children) =>
  emotion(
    type,
    props ? ({
      ...props,
      css: props.css ? css(props.css) : undefined
    }) : null,
    ...children
  )