import styled from '@emotion/styled';
import {
  Input as input,
} from 'theme-ui';

import {
  applyVariation,
} from './../utils/getVariations';

const variant = ({
  theme,
  variant = 'primary',
  themeKey = 'placeholderVariants',
}) => applyVariation(theme, variant, themeKey);

const Input = styled(input)`
  ::-webkit-input-placeholder {
    ${variant}
  }
  ::-moz-placeholder {
    ${variant}
  }
  :-ms-input-placeholder {
    ${variant}
  }
  :-moz-placeholder {
    ${variant}
  }
`;

export default Input;
