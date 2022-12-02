import { createStitches } from '@stitches/react';
import { default as defaultTheme } from './theme';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches(defaultTheme);
