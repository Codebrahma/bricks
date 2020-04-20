/* eslint-disable standard/object-curly-even-spacing */
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

const CorouselContainer = styled(Box)`
  position: relative;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Corousel = ({ children }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const coroselRef = useRef(null);

  const { translate, transition, activeIndex } = state;

  const getWidth = () => {
    console.log(coroselRef.current.getBoundingClientRect().width);
    return coroselRef.current.getBoundingClientRect().width;
  };

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

  return (
    <CorouselContainer ref={coroselRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        // width={getWidth()}
      >
        {children.map(({ props: { children, img }}) => (
          <Slide img={img}>{children}</Slide>
        ))}
        {/* <h1>Slide</h1> */}
      </SliderContent>
      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow direction='right' handleClick={nextSlide} />
    </CorouselContainer>
  );
};

export default Corousel;
