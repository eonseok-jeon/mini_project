import { theme } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  width: 'fit-content',
  margin: '0 auto 24px',
});

export const pageButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 5,

  ':hover': {
    color: theme.color.primary,
    background: theme.color.white,
  },
});

export const pageNumberButton = style([
  pageButton,
  {
    color: theme.color.paginationNumber,
  },
]);

export const pageArrowButton = style([
  pageButton,
  {
    color: theme.color.paginationArrowActive,

    ':disabled': {
      color: theme.color.paginationArrowDisable,
      cursor: 'not-allowed',
    },

    selectors: {
      '&:disabled:hover': {
        color: theme.color.paginationArrowDisable,
        background: theme.color.background,
      },
    },
  },
]);

export const pageNumberActive = style({
  color: theme.color.white,
  backgroundColor: theme.color.primary,
});
