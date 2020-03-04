import styled from '@emotion/styled';
import { Styled as themeUi, css } from 'theme-ui';

const applyPadding = (p, pt, pb, px, py, pr, pl) => ({
  padding: p,
  paddingBottom: pb,
  paddingTop: pt,
  paddingX: px,
  paddingY: py,
  paddingRight: pr,
  paddingLeft: pl,
});

const Table = styled(themeUi.table)(
  ({
    theme,
    color,
    bg,
    stripped,
    bordered,
    p,
    pt,
    pb,
    px,
    py,
    pr,
    pl,
    br,
    alignment,
  }) =>
    css({
      borderCollapse: 'collapse',
      color,
      bg,
      padding: p,
      borderRadius: br,
      textAlign: alignment || 'left',
      ...applyPadding(p, pt, pb, px, py, pr, pl),
      'tr td,th': {
        padding: '10px',
        border: bordered ? '1px solid #ddd' : '',
        borderBottom: !bordered ? '1px solid #ddd' : '',
      },
      'tbody tr:last-child td': {
        border: bordered || 'none',
      },
      'thead tr:first-of-type th:first-of-type': {
        borderTopLeftRadius: br,
      },
      'thead tr:first-of-type th:last-child': {
        borderTopRightRadius: br,
      },
      'tbody tr:nth-child(odd)': stripped && {
        background: '#ddd',
      },
    })(theme)
);

const Thead = styled('thead')(
  ({ theme, color, bg, p, pt, pb, px, py, pr, pl }) =>
    css({
      color,
      bg,
      'tr th': {
        ...applyPadding(p, pt, pb, px, py, pr, pl),
      },
    })(theme)
);

const Tbody = styled('tbody')(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const Th = styled(themeUi.th)(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const Tr = styled(themeUi.tr)(({ theme, color, bg }) =>
  css({
    color,
    bg,
  })(theme)
);

const Td = styled(themeUi.td)(
  ({ theme, color, bg, p, pt, pb, px, py, pr, pl }) =>
    css({
      color,
      bg,
      ...applyPadding(p, pt, pb, px, py, pr, pl),
    })(theme)
);

export { Table, Thead, Tbody, Th, Tr, Td };
