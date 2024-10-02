import { createTheme } from '@vanilla-extract/css';

export const [themeClass, theme] = createTheme({
  color: {
    baseText: '#151618',
    strongText: '#222',
    lightText: '#5e5f61',
    placeholder: 'gray',
    primary: '#524fa1',
    accent: '#fa466a',
    background: '#f9fafc',
    border: '#c9cacc',
    chipBackground: '#f1f0f3',
    chipHoverBackground: '#f1f0f3',
    white: '#fff',
    black: '#000',
  },
  font: {
    label: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#524fa1',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#222',
      lineHeight: '1.6',
    },
    description: {
      fontSize: '14px',
      fontWeight: 'normal',
      color: '#5e5f61',
      lineHeight: '1.6',
    },
    iconText: {
      fontSize: '12px',
      fontWeight: 'normal',
      color: '#7d7e80',
    },
  },
});
