import { Styled } from 'theme-ui'
import { style } from 'styled-system'
import styled from '@emotion/styled'
import { typography } from './utils';
import {
  Box,
  Flex,
  Container,
} from 'theme-ui'

const hidable = style({
  prop: 'display',
});

const b = styled(Box)(
  hidable
)

export { ThemeProvider } from 'theme-ui'
export { b as Box, Flex, Container }
const H1 = styled(Styled.h1)(typography);
const H2 = Styled.h2
const H3 = Styled.h3
const H4 = Styled.h4
const H5 = Styled.h5
const P = Styled.p
export {  H1, H2, H3, H4, H5,  P }
export { B, HorizontalRule, Text}  from './typography/index'
export { css } from 'theme-ui'
