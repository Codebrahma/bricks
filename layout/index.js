import styled from '@emotion/styled'
import {
  Box,
  Flex,
  Container,
} from 'theme-ui'
import { compose, display, typography, border } from 'styled-system'

const insideBox = compose (
  display,
  typography,
  border
)
const f = styled(Flex)(
  insideBox
)

const b = styled(Box)(
  insideBox
)

Flex.column = styled(Flex)`
  flex-direction: column;
`;



export {b as Box}
export {f as Flex}
export {Container}