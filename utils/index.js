import { style } from 'styled-system'

export const horizontalRuleHeight = style({
  prop: 'borderWidth',
  cssProperty: 'borderTopWidth',
});

export const horizontalRuleColor = style({
  prop: 'borderColor',
  cssProperty: 'borderTopColor',
  key: 'colors',
});
