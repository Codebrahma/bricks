import styled from '@emotion/styled'
import {
  Box,
  Flex,
  Container,
} from 'theme-ui'
import { hidable } from '../utils'

const b = styled(Box)(
  hidable
)
Flex.column = styled(Flex)`
  flex-direction: column;
`;

export {b as Box}
export {Flex, Container}