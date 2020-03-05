import styled from '@emotion/styled';
import { Styled as themeUi, css } from 'theme-ui';

const Table = styled(themeUi.table)(
  ({
    theme,
    color,
    bg,
    stripped,
    bordered,
    alignment,
  }) =>
    css({
      borderCollapse: 'collapse',
      color,
      bg,
      textAlign: alignment || 'left',
      'tr td,th': {
        padding: 3,
        border: bordered ? '1px solid #ddd' : '',
        borderBottom: !bordered ? '1px solid #ddd' : '',
      },
      'tbody tr:nth-child(odd)': stripped && {
        background: '#ddd',
      },
    })(theme)
);

const Thead = styled('thead')(
  ({ theme, color, bg }) =>
    css({
      color,
      bg,
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
    })(theme)
);

export { Table, Thead, Tbody, Th, Tr, Td };
