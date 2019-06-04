import styled from '@emotion/styled'
import { typography } from 'styled-system'
import { Styled as themeui } from 'theme-ui'
import propTypes from '@styled-system/prop-types'

export const H1 = styled(themeui.h1)(typography);
export const H2 = styled(themeui.h2)(typography);
export const H3 = styled(themeui.h3)(typography);
export const H4 = styled(themeui.h4)(typography);
export const H5 = styled(themeui.h5)(typography);

H1.propTypes = {
  ...propTypes.typography,
}
