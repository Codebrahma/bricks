import styled from '@emotion/styled'
import { style, color, maxWidth, width } from 'styled-system'
import css from '@styled-system/css'
import { typography } from '../utils'

export const P = styled('p')(
  css({
    fontFamily: 'body',
    fontSize: [1, 'desktop.1'],
    lineHeight: 1,
    maxWidth: '40rem',
  }),
  typography, maxWidth
)

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

export const Text = styled('div')(
  css({
    fontFamily: 'body',
    fontSize: [1, 'desktop.1'],
    lineHeight: 1,
  }), typography, color,
)
Text.displayName = 'Text';
Text.span = Text.withComponent('span');



const horizontalRuleHeight = style({
  prop: 'height',
  cssProperty: 'borderTopWidth',
});

const horizontalRuleColor = style({
  prop: 'color',
  cssProperty: 'borderTopColor',
  key: 'colors',
});


export const HorizontalRule = styled('div')(
  css({
    borderTopStyle: 'solid',
    display: 'block',
    height: '1px',
  })
  ,width
  ,horizontalRuleColor
  ,horizontalRuleHeight
)
