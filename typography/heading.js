import styled from '@emotion/styled'
import { fontFamily, fontSize, lineHeight, space } from 'styled-system'
import { get } from '../utils'

export const H1 = styled.div`
  font-family: ${get('fonts.heading')};
  font-size: ${get('fontSizes.xxl')};
  margin-top: ${get('space.4')};
  margin-bottom: ${get('space.1')};
  ${fontFamily} ${fontSize} ${lineHeight}
  ${space}
`

export const H2 = styled.h2`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
