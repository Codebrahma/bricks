import styled from '@emotion/styled'
import css from '@styled-system/css'
import {  space, color, border, fontFamily, fontSize, borderColor } from 'styled-system'
import PropTypes from 'prop-types';


export const InputButton = styled('input')(
  css({
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'desktop.1',
    border: '2px solid',
    borderColor: 'black.1',
    color: 'tint',
    bg: 'black.1',
    p: '5px',
  }),
  color, space, fontFamily, fontSize,
  border, borderColor
)
InputButton.defaultProps = {type: 'submit'}
InputButton.propTypes = {
  type: PropTypes.string
}