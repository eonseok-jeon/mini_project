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
    white: '#fff',
    black: '#000',
  },
  font: {
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