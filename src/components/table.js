import styled from '@emotion/styled';
import { Styled as themeUi, css } from 'theme-ui';

const getThemeStylesObj = (theme, styleObj, obj) => theme['styles'][styleObj][obj];

const Table = styled(themeUi.table)(
  ({
    theme,
    color,
    bg,
    striped,
    borderless,
    bordered,
    alignment,
    hoverable,
  }) =>
    css({
      width: '100%',
      borderCollapse: 'collapse',
      color,
      bg,
      textAlign: alignment || 'left',
      'tr td,th': {
        border: borderless && !bordered ? '' : !borderless && bordered ? '1px solid #ddd' : '',
        borderBottom: !bordered && !borderless ? '1px solid #ddd' : '',
      },
      'tbody tr:nth-of-type(odd)': striped && {
        background: getThemeStylesObj(theme, 'table', 'stripColor') || '#ddd',
      },
      'tbody tr:hover': hoverable && {
        background: getThemeStylesObj(theme, 'table', 'hoverColor') || '#f1f1f1',
      },
    })(theme)
);

const Head = styled('thead')(
  ({ theme, color, bg }) =>
    css({
      color,
      bg,
    })(theme)
);

const Body = styled('tbody')(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const HeaderRow = styled(themeUi.tr)(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const HeaderCell = styled(themeUi.th)(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const Row = styled(themeUi.tr)(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const Cell = styled(themeUi.td)(
  ({ theme, color, bg }) =>
    css({
      color,
      bg,
    })(theme)
);

export { Table, Head, HeaderRow, HeaderCell, Body, Row, Cell };
