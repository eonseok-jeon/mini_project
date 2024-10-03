import { theme } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contentCounts = style({
  margin: '20px 0 15px',
  paddingBottom: 10,
  borderBottom: `1px solid ${theme.color.border}`,
  color: theme.color.strongText,
  fontWeight: 'bold',
});

export const courseCardWrapper = style({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
  marginBottom: 24,
});
