/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/** @jsx jsx */

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import {
  DefaultTable,
  TableContainer,
  Tr,
  Td,
  Th,
  ArrowIcon,
  HeaderContainer,
  HeaderText,
} from './components';

const Table = ({ dataSource, colNames, headerColor, variant, sx, ...rest }) => {
  const [obtaineddataSource, setobtaineddataSource] = useState(dataSource);
  const [colSortIndex, setSortIndex] = useState([]);

  const sortDataAscending = (key, index) => {
    const newobtaineddataSource = [...obtaineddataSource];
    newobtaineddataSource.sort((a, b) => {
      let keyA = a[key];
      let keyB = b[key];
      if (typeof a[key] === 'string') {
        keyA = keyA.toLowerCase();
        keyB = keyB.toLowerCase();
      }
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setobtaineddataSource(newobtaineddataSource);
    const newSortIndex = [...colSortIndex];
    newSortIndex[index] = true;
    setSortIndex(newSortIndex);
  };
  const sortDataDescending = (key, index) => {
    const newobtaineddataSource = [...obtaineddataSource];
    newobtaineddataSource.sort((a, b) => {
      let keyA = a[key];
      let keyB = b[key];
      if (typeof a[key] === 'string') {
        keyA = keyA.toLowerCase();
        keyB = keyB.toLowerCase();
      }
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
    setobtaineddataSource(newobtaineddataSource);
    const newSortIndex = [...colSortIndex];
    newSortIndex[index] = false;
    setSortIndex(newSortIndex);
  };

  useEffect(() => {
    const newColSortIndex = colNames.map((colName) => {
      if (colName.sortable) {
        return true;
      }
      return null;
    });
    setSortIndex(newColSortIndex);
  }, []);

  return (
    <TableContainer {...rest}>
      <DefaultTable>
        <thead>
          <Tr>
            {colNames.map((colName, index) => (
              <Th
                key={colName.key}
                style={{ cursor: colName.sortable ? 'pointer' : 'default' }}
                onClick={
                  colName.sortable
                    ? colSortIndex[index]
                      ? () => sortDataDescending(colName.key, index)
                      : () => sortDataAscending(colName.key, index)
                    : null
                }
              >
                {colName.sortable ? (
                  <HeaderContainer>
                    <HeaderText>{colName.title}</HeaderText>

                    <ArrowIcon
                      style={{
                        transform: colSortIndex[index]
                          ? 'rotate(0)'
                          : 'rotate(-180deg)',
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='13'
                        height='13'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0l8 9h-6v15h-4v-15h-6z' />
                      </svg>
                    </ArrowIcon>
                  </HeaderContainer>
                ) : (
                  colName.title
                )}
              </Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          {obtaineddataSource.map((data) => {
            return (
              <Tr key={Math.random()}>
                {colNames.map((colName) => {
                  if (colName.render !== undefined) {
                    if (colName.key in data) {
                      return (
                        <Td key={data[colName.key] + Math.random()}>
                          {colName.render(data[colName.key])}
                        </Td>
                      );
                    }

                    return null;
                  }
                  if (colName.key in data) {
                    return (
                      <Td key={data[colName.key] + Math.random()}>
                        {data[colName.key]}
                      </Td>
                    );
                  }
                  return null;
                })}
              </Tr>
            );
          })}
        </tbody>
      </DefaultTable>
    </TableContainer>
  );
};

Table.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  colNames: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerColor: PropTypes.string,
  sx: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  variant: PropTypes.string,
};
Table.defaultProps = {
  headerColor: '',
  sx: {},
  variant: 'primary',
};

export default Table;
