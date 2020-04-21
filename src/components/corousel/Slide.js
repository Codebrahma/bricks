import styled from '@emotion/styled';
import { Box, css } from 'theme-ui';

const Slide = styled(Box)`
  ${({ theme, img }) => css({
    height: '100%',
    minWidth: '100%',
    width: '100%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  })(theme)}
`;

export default Slide;
