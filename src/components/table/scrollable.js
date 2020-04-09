import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import { Table } from './index';

const ScrollableTable = ({height, ...props}) => (
  <Fragment>
    <Box>
      <Table {...props}>
        {props.children[0]}
      </Table>
    </Box>
    <Box css={{height: height || '400px', overflow: 'scroll'}}>
      <Table {...props}>
        {props.children[1]}
      </Table>
    </Box>
  </Fragment>
);

ScrollableTable.propTypes = {
  height: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
ScrollableTable.defaultProps = {
  height: '400px',
};

export default ScrollableTable;
