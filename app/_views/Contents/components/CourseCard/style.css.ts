import { theme } from '@/app/_styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: 296,
  height: 275,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  padding: '28px 24px',
  backgroundColor: theme.color.white,
});

export const labelStyle = style({
  marginBottom: 5,
  ...theme.font.label,
});

export const titleStyle = style({
  display: '-webkit-box',
  height: 58,
  marginBottom: 5,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  wordBreak: 'break-word',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  ...theme.font.title,
});

export const descriptionStyle = style({
  display: '-webkit-box',
  height: 45,
  marginBottom: 15,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  wordBreak: 'break-word',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  ...theme.font.description,
});

export const iconContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const iconWrapper = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  ...theme.font.iconText,
});

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: 296,
  height: 61,
  padding: '28px 24px',
  borderTop: `2px solid ${theme.color.background}`,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  backgroundColor: theme.color.white,
  color: theme.color.primary,
});
