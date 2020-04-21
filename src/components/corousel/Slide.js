import styled from '@emotion/styled';
import { Flex, css } from 'theme-ui';

const Slide = styled(Flex)`
  ${({ theme, img, position }) => css({
    height: '100%',
    minWidth: '100%',
    width: '100%',
    background: '#ddd',
    backgroundImage: `url(${img || ''})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    alignItems: 'center',
    justifyContent: position,
  })(theme)}
`;

export default Slide;
