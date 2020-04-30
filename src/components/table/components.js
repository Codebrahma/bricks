import styled from '@emotion/styled';
import { Box, Flex, Text } from 'theme-ui';
import { applyVariation } from '../../utils/getStyles';

const TableContainer = styled(Box)(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.container`, 'table')
);

const DefaultTable = styled.table(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.defaultTable`, 'table')
);

const Tr = styled.tr(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.tr`, 'table')
);
const Td = styled.td(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.td`, 'table')
);
const Th = styled.th(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.th`, 'table')
);
const ArrowIcon = styled(Box)(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.arrowIcon`, 'table')
);

const HeaderContainer = styled(Flex)(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.headerContainer`, 'table')
);
const HeaderText = styled(Text)(({ theme, variant = 'primary' }) =>
  applyVariation(theme, `${variant}.headerText`, 'table')
);

export {
  TableContainer,
  DefaultTable,
  Tr,
  Td,
  Th,
  ArrowIcon,
  HeaderContainer,
  HeaderText,
};
