/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import { Relative, Absolute } from '../position';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Indicators from './Indicator';

const ShowStatus = styled(Absolute)`
  top: 10px;
  right: 10px;
  color: #333;
`;

const CorouselContainer = styled(Relative)`
  height: 500px;
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
          <Slide img={img} position={contentPosition}><Box>{children}</Box></Slide>
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
      {showStatus && (
        <ShowStatus>
          {activeIndex + 1}/ {children.length}
        </ShowStatus>
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
  showStatus: PropTypes.bool,
  contentPosition: PropTypes.string,
};

Corousel.defaultProps = {
  transitionTimer: 4000,
  autoPlay: true,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  contentPosition: 'center',
};

export default Corousel;