import styled from '@emotion/styled'
import css from '@styled-system/css'
import {  space, color, border, fontFamily, fontSize, borderColor } from 'styled-system'

export const InputText = styled('input')(
  css({
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'desktop.1',
    border: '2px solid',
    borderColor: 'black.1',
    color: 'black.1',
    bg: 'tint',
    p: '5px',
  }),
  color, space, fontFamily, fontSize,
  border, borderColor
)
InputText.defaultProps = {type: 'text'}