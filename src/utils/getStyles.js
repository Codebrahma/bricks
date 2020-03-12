import { css, get } from 'theme-ui';

const applyVariation = (theme, variant, themeKey) =>
  css(get(theme, themeKey + '.' + variant, get(theme, variant)));

const getThemeStyles = (theme, themeKey, value) =>
  value ? get(theme, themeKey)[value] : get(theme, themeKey);

const applyFocus = (theme) => css({
  '&:focus': {
    boxShadow: '#add9f5 0px 0px 0px 2px',
    outline: 'none',
    borderColor: 'info',
  },
})(theme);

export {
  applyVariation,
  getThemeStyles,
  applyFocus,
};
