import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, css } from 'theme-ui';
import { InlineBlock } from './index';
import { getThemeStyles } from './../utils/getStyles';

const ENTER_KEY = 13;

const defaultStyle = color => ({
  color,
  borderBottom: '2px solid',
  borderColor: color,
});

const getTheme = (theme, variant, key) =>
  getThemeStyles(theme, 'tabs', variant)[key];

const Tab = styled(InlineBlock)`
  cursor: pointer;
  ${({ theme, selected, variant }) =>
    css({
      marginRight: '10px',
      padding: 2,
      ...getTheme(theme, variant, 'tab'),
      ...(selected ? defaultStyle('primaryDark') : {}),
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

const Content = styled(Box)`
  ${({ theme, variant }) =>
    css({
      ...getTheme(theme, variant, 'content'),
    })(theme)}
`;

const Tabs = ({ children, selected, variant, ...otherProps }) => {
  const [tabSelected, setTabSelected] = useState(parseInt(selected));
  const labels = children.map(({ props: { label } }) => label);

  return (
    <Box {...otherProps}>
      <TabContainer>
        {labels.map((label, i) => (
          <Tab
            variant={variant}
            selected={i + 1 === tabSelected}
            onClick={() => setTabSelected(i + 1)}
            key={label}
            tabIndex='0'
            onKeyDown={e =>
              e.keyCode === ENTER_KEY ? setTabSelected(i + 1) : null
            }
          >
            {label}
          </Tab>
        ))}
      </TabContainer>
      <Content variant={variant}>
        {children.map((child, i) =>
          i + 1 === tabSelected ? child.props.children : null
        )}
      </Content>
    </Box>
  );
};

Tabs.tab = Tab;

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.string,
};
Tabs.defaultProps = {
  selected: 1,
  variant: 'primary',
};

export default Tabs;
