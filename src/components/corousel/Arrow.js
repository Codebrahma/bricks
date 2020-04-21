import React from 'react';
import PropTypes from 'prop-types';
import { Box, css } from 'theme-ui';
import styled from '@emotion/styled';
import { applyVariation } from '../../utils/getStyles';

const Arr = styled(Box)`
  display: flex;
  position: absolute;
  top: 0;
  ${({ direction }) =>
    css({
      right: direction === 'right' ? '0px' : 'unset',
      left: direction === 'left' ? '0px' : 'unset',
    })}
  height: 100%;
  width: 50px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  img {
    ${({ direction }) =>
    css({
      transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
    })}
    &:focus {
      outline: 0;
    }
  }
  ${({ theme, variant, direction }) =>
    direction === 'left'
      ? applyVariation(theme, `${variant}.arrows.left`, 'corousel')
      : applyVariation(theme, `${variant}.arrows.right`, 'corousel')}
`;

const Arrow = ({ direction, handleClick, variant }) => (
  <Arr direction={direction} onClick={handleClick} variant={variant}>
    {direction === 'right' ? <span> &#8592; </span> : <span> &#8594;</span>}
  </Arr>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Arrow;
