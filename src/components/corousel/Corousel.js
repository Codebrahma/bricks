/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Indicators from './Indicator';

const CorouselContainer = styled(Box)`
  position: relative;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Corousel = ({
  children,
  autoPlay,
  transitionTimer,
  showArrows,
  showIndicators,
  contentPosition,
  stopOnHover,
  showStatus,
}) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const coroselRef = useRef(null);
  const autoPlayRef = useRef();
  const { translate, transition, activeIndex } = state;

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlay && autoPlayRef.current();
    };

    let interval;
    if (autoPlay) {
      interval = setInterval(play, transitionTimer);
    }

    return () => autoPlay && clearInterval(interval);
  }, []);

  const getWidth = () => coroselRef.current.getBoundingClientRect().width;

  const nextSlide = () => {
    if (activeIndex === children.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (children.length - 1) * getWidth(),
        activeIndex: children.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const onCLickIndicator = (clickedIndex) => {
    setState({
      ...state,
      translate: (clickedIndex) * getWidth(),
      activeIndex: clickedIndex,
    });
  };

  return (
    <CorouselContainer ref={coroselRef}>
      <SliderContent
        translate={translate}
        transition={transition}
      >
        {children.map(({props: { children, img }}) => (
          <Slide img={img}>{children}</Slide>
        ))}
      </SliderContent>
      {showArrows && (
        <Fragment>
          <Arrow direction='left' handleClick={prevSlide} />
          <Arrow direction='right' handleClick={nextSlide} />
        </Fragment>
      )}
      {showIndicators && (
        <Indicators
          SlideLength={children.length}
          activeIndex={activeIndex}
          onClick={onCLickIndicator}
        />
      )}
    </CorouselContainer>
  );
};

Corousel.propTypes = {
  transitionTimer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  autoPlay: PropTypes.bool,
  showArrows: PropTypes.bool,
  showIndicators: PropTypes.bool,
};

Corousel.defaultProps = {
  transitionTimer: 2000,
  autoPlay: true,
  showArrows: true,
  showIndicators: true,
};

export default Corousel;
