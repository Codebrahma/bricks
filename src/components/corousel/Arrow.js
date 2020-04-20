import React from 'react';
import { Box, css } from 'theme-ui';
import styled from '@emotion/styled';

const Arr = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;

  ${({direction}) => css({
    right: direction === 'right' ? '25px' : 'unset',
    left: direction === 'left' ? '25px' : 'unset',
  })}
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    ${({direction}) => css({
    transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
  })}
    &:focus {
      outline: 0;
    }
  }
`;

const Arrow = ({ direction, handleClick }) => (
  <Arr
    direction={direction}
    onClick={handleClick}
  >
    {direction === 'right' ? (<h1> &#8594;</h1>) : (<h1> &#8592; </h1>)}
  </Arr>
);

export default Arrow;
