import styled from '@emotion/styled'
import { alignSelf, width, color, space, style } from 'styled-system'
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
} from 'styled-system';
export { Container } from './container'

const hidable = style({
  prop: 'display',
});
export const Box = styled.div`
  ${width} ${color} ${space} ${hidable}
  ${alignSelf} 
`

export const Flex = styled(Box)`
  display: flex;

  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
`;
Flex.column = styled(Flex)`
  flex-direction: column;
`;

