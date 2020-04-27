import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, css } from 'theme-ui';
import { Absolute } from '../position';
import { applyVariation } from '../../utils/getStyles';

const IndicatorContainer = styled(Absolute)`
  ${({ theme }) =>
    css({
      bottom: '25px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })(theme)}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.indicators.container`, 'corousel')}
`;

const Indicator = styled(Box)`
  ${({ active }) =>
    css({
      padding: 2,
      marginRight: 2,
      cursor: 'pointer',
      borderRadius: '50%',
      background: active ? 'black' : 'white',
    })}
  ${({ theme, variant }) =>
    applyVariation(theme, `${variant}.indicators.indicator`, 'corousel')} 
  ${({ theme, variant, active }) =>
    active
      ? applyVariation(
        theme,
        `${variant}.indicators.selectedIndicator`,
        'corousel'
      )
      : null}
`;

const Indicators = ({ SlideLength, activeIndex, onClick, variant }) => (
  <IndicatorContainer variant={variant}>
    {Array.from({ length: SlideLength }, (_, i) => i).map((val, i) => (
      <Indicator
        key={val}
        active={activeIndex === i}
        onClick={() => onClick(i)}
        variant={variant}
      />
    ))}
  </IndicatorContainer>
);

Indicators.propTypes = {
  SlideLength: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Indicators;
