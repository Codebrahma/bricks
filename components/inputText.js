import styled from '@emotion/styled'
import css from '@styled-system/css'
import { space, color, typography, border, borderColor, borderRadius, backgroundColor } from 'styled-system'
import propTypes from '@styled-system/prop-types'

export const InputText = styled('input')(
  css({
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'desktop.1',
    border: '2px solid',
    borderColor: 'black.1',
    color: 'black.1',
    bg: 'tint',
    p: '12px',
    borderRadius: 1,
  }),
  space, color, typography,
  border, borderColor, borderRadius, backgroundColor,
)
InputText.defaultProps = {type: 'text'}
InputText.propTypes = {
  ...propTypes.border,
  ...propTypes.borderColor,
  ...propTypes.borderRadius,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.backgroundColor,
}