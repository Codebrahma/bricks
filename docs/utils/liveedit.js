import React from 'react'
import { jsx } from '@emotion/core'
/** @jsx jsx */
import { FieldSet, EditProvider } from '@styled-system/edit'

export default props =>
    <EditProvider css={{float:'right'}}>
      {props.children}
      <FieldSet name='colors' />
      <FieldSet name='fontSizes' />
    </EditProvider>