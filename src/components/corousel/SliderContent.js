import styled from '@emotion/styled';
import { Box } from 'theme-ui';

const SliderContent = styled(Box)`
  height: 100%;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: 100%;
  display: flex;
`;

export default SliderContent;
