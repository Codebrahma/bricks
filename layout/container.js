import styled from '@emotion/styled'
import { maxWidth, space } from 'styled-system';
import css from '@styled-system/css'


export const Container = styled('div')(
  css({
    mx: 'auto',
    maxWidth: 1120,
    px: 1,
  }),
    maxWidth, space
)


Container.displayName = 'Container';
