import styled from '@emotion/styled';
import { Styled as themeUi, css } from 'theme-ui';

import { withTruncatedProp, withDefaultThemeStyle } from './util';
import { getThemeStyles } from './../../utils/getStyles';

const Table = styled(themeUi.table)(
  ({ theme, color, bg, striped, borderless, bordered, alignment, hoverable }) =>
    css({
      width: '100%',
      borderCollapse: 'collapse',
      color,
      bg,
      textAlign: alignment || 'left',
      'tr td,th': {
        border:
          borderless && !bordered
            ? ''
            : !borderless && bordered
              ? '1px solid #ddd'
              : '',
        borderBottom: !bordered && !borderless ? '1px solid #ddd' : '',
      },
      'tbody tr:nth-of-type(even)': striped && {
        background: '#ddd',
        ...getThemeStyles(theme, 'styles', 'table', 'stripColor'),
      },
      'tbody tr:hover': hoverable && {
        background: '#f1f1f1',
        ...getThemeStyles(theme, 'styles', 'table', 'hoverColor'),
      },
    })(theme)
);

const Head = withDefaultThemeStyle('thead');

const Body = withDefaultThemeStyle('tbody');

const HeaderCell = withTruncatedProp(themeUi.th);

const Row = withDefaultThemeStyle(themeUi.tr);

const Cell = withTruncatedProp(themeUi.td);

export { Table, Head, HeaderCell, Body, Row, Cell };
