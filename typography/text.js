import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Styled as themeui } from 'theme-ui'
import { typography, style, color, maxWidth, width } from 'styled-system'
import { horizontalRuleColor, horizontalRuleHeight } from '../utils'


export const Text = styled('div')(
  css({
    fontFamily: 'body',
    fontSize: [1, 'desktop.1'],
    lineHeight: 1,
  }), typography, color,
)
Text.displayName = 'Text';
Text.span = Text.withComponent('span');

export const P = styled(themeui.p)(typography, maxWidth)
export const B = styled('b')(
  css({
    fontFamily: 'bold',
  }), 
  typography
)
export const I = styled('i')(
  css({
    fontFamily: 'italic',
  }), 
  typography
)

export const HorizontalRule = styled('div')(
  css({
    borderTopStyle: 'solid',
    display: 'block',
    borderWidth: '2px',
    borderColor: 'black.0',
  })
  ,width
  ,horizontalRuleColor
  ,horizontalRuleHeight
)
