import styled from '@emotion/styled';
import { css, Flex, Text, Image } from 'theme-ui';
import { Relative, Absolute } from '../position';
import { applyVariation } from '../../utils/getStyles';
import { positions } from './options';

const MessagesContainer = styled(Flex)`
  ${({ theme }) =>
    css({
      flexDirection: 'column',
      position: 'fixed',
      zIndex: 9999,
    })(theme)}
    ${({ theme, position }) => {
    switch (position) {
      case positions.TOP: {
        return css({
          top: 0,
          left: '40%',
        })(theme);
      }
      case positions.BOTTOM: {
        return css({
          bottom: 0,
          left: '40%',
        })(theme);
      }
      case positions.TOP_LEFT: {
        return css({
          top: 0,
          left: 20,
        })(theme);
      }
      case positions.TOP_RIGHT: {
        return css({
          top: 0,
          right: 20,
        })(theme);
      }
      case positions.BOTTOM_LEFT: {
        return css({
          bottom: 0,
          left: 20,
        })(theme);
      }
      case positions.BOTTOM_RIGHT: {
        return css({
          bottom: 0,
          right: 20,
        })(theme);
      }
    }
  }}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.messagesContainer`, 'message')}
`;
const MessageWrapper = styled(Relative)`
  ${({ theme }) =>
    css({
      zIndex: 9999,
      margin: '10px 0',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.wrapper`, 'message')}
`;

const CloseIcon = styled(Absolute)`
  ${({ theme }) =>
    css({
      top: 10,
      right: 10,
      cursor: 'pointer',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.closeIcon`, 'message')}
`;

const TitleContainer = styled(Flex)`
  ${({ theme }) =>
    css({
      mb: 10,
      color: 'inherit',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.titleContainer`, 'message')}
`;

const IndicationImage = styled(Image)`
  ${({ theme }) =>
    css({
      mr: '5px',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.indicationImage`, 'message')}
`;
const Title = styled(Text)`
  ${({ theme }) =>
    css({
      color: 'inherit',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.title`, 'message')}
`;

const Description = styled(Text)`
  ${({ theme }) =>
    css({
      color: 'inherit',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.description`, 'message')}
`;

export {
  MessagesContainer,
  CloseIcon,
  Title,
  Description,
  MessageWrapper,
  TitleContainer,
  IndicationImage,
};
