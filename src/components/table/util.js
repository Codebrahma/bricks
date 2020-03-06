import styled from '@emotion/styled';
import { css } from 'theme-ui';

const withTruncatedProp = (comp) => {
  return styled(comp)(
    ({ theme, color, bg, isTruncated, ...props }) =>
      css({
        color,
        bg,
        ...props,
        ...(isTruncated ? {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '0px',
        } : {}),
      })(theme)
  );
};

const getThemeStylesObj = (theme, styleObj, obj) => theme['styles'][styleObj][obj];

export { withTruncatedProp, getThemeStylesObj };
