import styled from '@emotion/styled'
import {
  Box,
  Flex,
  Container,
} from 'theme-ui'
import { display } from 'styled-system'

const b = styled(Box)(
  display
)
Flex.column = styled(Flex)`
  flex-direction: column;
`;

export {b as Box}
export {Flex, Container}