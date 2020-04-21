import styled from '@emotion/styled';
import { Flex, css } from 'theme-ui';
import { applyVariation } from '../../utils/getStyles';

const Slide = styled(Flex)`
  ${({ theme, img, position }) => css({
    height: '100%',
    minWidth: '100%',
    width: '100%',
    bg: 'borderGray',
    backgroundImage: `url(${img || ''})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    alignItems: 'center',
    justifyContent: position,
  })(theme)}
  ${({ theme, variant }) => applyVariation(theme, `${variant}.content`, 'corousel')}
`;

export default Slide;
