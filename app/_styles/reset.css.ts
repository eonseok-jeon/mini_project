import { globalStyle } from '@vanilla-extract/css';

globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    all: 'unset',
    display: 'revert',
  }
);

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
});

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontSmooth: 'never',
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('ol, ul, menu, summary', {
  listStyle: 'none',
});

globalStyle('img', {
  maxInlineSize: '100%',
  maxBlockSize: '100%',
});

globalStyle('table', {
  borderCollapse: 'collapse',
});

globalStyle('input, textarea', {
  WebkitUserSelect: 'auto',
});

globalStyle('textarea', {
  whiteSpace: 'revert',
});

globalStyle('meter', {
  WebkitAppearance: 'revert',
  appearance: 'revert',
});

globalStyle(':where(pre)', {
  all: 'revert',
  boxSizing: 'border-box',
});

globalStyle('::placeholder', {
  color: 'unset',
});

globalStyle('::marker', {
  content: 'initial',
});

globalStyle(':where([hidden])', {
  display: 'none',
});

globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  MozUserModify: 'read-write',
  WebkitUserModify: 'read-write',
  overflowWrap: 'break-word',
  // @ts-expect-error: -webkit-line-break is a non-standard property
  WebkitLineBreak: 'after-white-space',
  WebkitUserSelect: 'auto',
});

globalStyle(':where([draggable="true"])', {
  // @ts-expect-error: -webkit-user-drag is a non-standard property
  WebkitUserDrag: 'element',
});

globalStyle(':where(dialog:modal)', {
  all: 'revert',
  boxSizing: 'border-box',
});
