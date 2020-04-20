import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'theme-ui';

const Slide = ({ img, children }) => (
  <Box
    sx={{
      height: '100%',
      minWidth: '100%',
      width: '100%',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    {children}
  </Box>
);

export default Slide;
