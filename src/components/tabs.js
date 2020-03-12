import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, get, css } from 'theme-ui';
import { InlineBlock } from './index';

const defaultStyle = (color) => ({
  color,
  borderBottom: '2px solid',
  borderColor: color,
});

const isEnterKeyCode = (e) => e.keyCode === 13;

const themeStyles = (theme, themeKey = 'tabs', value) =>
  value ? get(theme, themeKey)[value] : get(theme, themeKey);

const Tab = styled(InlineBlock)`
  margin-right: 10px;
  cursor: pointer;
  ${({ theme, selected }) =>
    css({
      padding: 2,
      ...themeStyles(theme, 'tabs', 'tab'),
      ...(selected
        ? defaultStyle('primaryDark')
        : {}),
      '&:hover': {
        ...defaultStyle('primary'),
      },
      ':focus': {
        outline: 'none',
        ...defaultStyle('primary'),
      },
    })(theme)}
`;

const TabContainer = styled(Box)`
  border-bottom: 1px solid #888;
`;

const Content = styled(Box)(
  ({theme}) => css({
    ...themeStyles(theme, 'tabs', 'content'),
  })(theme)
);

const Tabs = ({ children, selected }) => {
  const [index, setIndex] = useState(parseInt(selected));

  const labels = children.map(({ props: { label } }) => label);

  return (
    <Box>
      <TabContainer>
        {labels.map((label, i) => (
          <Tab
            selected={i + 1 === index}
            onClick={() => setIndex(i + 1)}
            key={label}
            tabIndex='0'
            onKeyDown={e => isEnterKeyCode(e) ? setIndex(i + 1) : null}
          >
            {label}
          </Tab>
        ))}
      </TabContainer>
      <Content>
        {children.map((child, i) =>
          i + 1 === index ? child.props.children : null
        )}
      </Content>
    </Box>
  );
};

Tabs.tab = Tab;

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
Tabs.defaultProps = {
  selected: 1,
};

export default Tabs;
