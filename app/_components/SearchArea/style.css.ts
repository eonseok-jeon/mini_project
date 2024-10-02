import { theme } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: '12px 0px',
  padding: '12px 16px 12px 0px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 4,
  backgroundColor: theme.color.white,

  ':focus-within': {
    border: `1px solid ${theme.color.primary}`,
  },
});

export const icon = style({
  margin: '0px 16px',

  selectors: {
    [`${container}:focus-within &`]: {
      fill: theme.color.primary,
    },
  },
});

export const input = style({
  width: '100%',

  '::placeholder': {
    color: theme.color.placeholder,
  },
});
