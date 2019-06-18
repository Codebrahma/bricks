import styled from '@emotion/styled'
import {
  Box,
  Flex,
  Container,
} from 'theme-ui'
import { display, typography, border } from 'styled-system'

const b = styled(Box)(
  display,
  typography,
  border
)
Flex.column = styled(Flex)`
  flex-direction: column;
`;

export {b as Box}
export {Flex, Container}