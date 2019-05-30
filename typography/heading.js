import styled from '@emotion/styled'
import css from '@styled-system/css'
import { typography } from '../utils'
import { fontFamily, space } from 'styled-system'
export const H1 = styled('h1')(
    css({
      fontFamily: 'heading',
      fontSize: [5, 'desktop.5' ],
      lineHeight: 3,
      marginTop: [3,4], 
      marginBottom: 1,
    })
    ,typography
);

export const H2 = styled('h2')(
  css({
    fontFamily: 'heading',
    fontSize: [4, 'desktop.4'],
    lineHeight: 2,
    marginTop: [3,4],
    marginBottom: 1,
  })
  , typography, fontFamily, space
)
export const H3 = styled('h3')(
  css({
    fontFamily: 'heading',
    fontSize: [3, 'desktop.3'],
    lineHeight: 1,
    marginTop: [ 2,3 ],
    marginBottom: 1,
  }),
  typography
)
export const H4 = styled('h4')(
  css({
    fontFamily: 'heading',
    fontSize: [2, 'desktop.2'],
    lineHeight: 1,
    marginTop: 2,
    marginBottom: 1,
  }),
  typography
)
export const H5 = styled('h5')(
  css({
    fontFamily: 'heading',
    fontSize: [1, 'desktop.1'],
    lineHeight: 1,
    marginTop: 2,
    marginBottom: 1,
  }),
  typography
)
