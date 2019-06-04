import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { jsx } from '@emotion/core'
/** @jsx jsx */
import { FieldSet, EditProvider, ThemeControls } from '@styled-system/edit'
import theme from '../../theme'

export default props =>
    <EditProvider css={{float:'right'}}>
      {props.children}
      <FieldSet name='colors' />
      <FieldSet name='fontSizes' />
    </EditProvider>