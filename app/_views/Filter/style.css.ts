import { theme } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.color.border}`,
});

export const wrapper = style({
  display: 'flex',
  borderBottom: `1px solid ${theme.color.border}`,

  ':last-child': {
    borderBottom: 'none',
  },
});

export const labelStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: 96,
  minWidth: 96,
  padding: '14px 16px',
  borderRight: `1px solid ${theme.color.border}`,

  backgroundColor: theme.color.background,
});

export const dataList = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
  padding: '0px 8px',
  backgroundColor: theme.color.white,
});

export const chip = style({
  width: 'fit-content',
  margin: 8,
  padding: '4px 12px',
  borderRadius: 30,
  color: theme.color.lightText,
  backgroundColor: theme.color.chipBackground,
  transition: '0.2s all ease',

  ':hover': {
    color: theme.color.white,
    backgroundColor: theme.color.primary,
  },
});

export const activeChip = style({
  color: theme.color.white,
  backgroundColor: theme.color.primary,

  ':hover': {
    color: theme.color.strongText,
  },
});
