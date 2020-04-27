import styled from '@emotion/styled';
import { Flex } from 'theme-ui';

const SliderContent = styled(Flex)`
  height: 100%;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: 100%;
`;

export default SliderContent;
