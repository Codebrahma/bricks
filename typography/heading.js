import styled from '@emotion/styled'
import { fontFamily, fontSize, lineHeight, space } from 'styled-system'
import theme from '../theme'

export const H1 = styled.h1`
  ${fontFamily} ${fontSize} ${lineHeight}
  ${space}
`
H1.defaultProps = {
  fontFamily: theme.fonts.heading,
  fontSize: ['mxxl','xxl'],
  lineHeight: [3,3],
  marginTop: [3,4],
  marginBottom: 1,
};
export const H2 = styled.h2`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H2.defaultProps = {
  fontFamily: theme.fonts.heading,
  fontSize: ['mxl', 'xl'],
  lineHeight: [2,2],
  marginTop: [3,4],
  marginBottom: 1,
} 