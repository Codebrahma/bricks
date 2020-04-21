import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, css } from 'theme-ui';

const Indicator = styled(Box)`
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  ${({ active }) => css({
    background: active ? 'black' : 'white',
  })}
`;

const Indicators = ({ SlideLength, activeIndex, onClick }) => (
  <Box
    css={{
      position: 'absolute',
      bottom: '25px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {Array.from({ length: SlideLength }, (_, i) => i).map((val, i) => (
      <Indicator key={val} active={activeIndex === i} onClick={() => onClick(i)} />
    ))}
  </Box>
);

Indicators.propTypes = {
  SlideLength: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Indicators;
