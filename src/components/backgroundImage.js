import styled from '@emotion/styled';
import { Box } from 'theme-ui';

const BackgroundImage = styled(Box)`
  ${({ imageUrl, image, size, repeat }) => ({
    backgroundImage: imageUrl ? `url(${imageUrl})` : image,
    backgroundSize: size || 'cover',
    backgroundRepeat: repeat || 'no-repeat'
  })}
`;

export default BackgroundImage;