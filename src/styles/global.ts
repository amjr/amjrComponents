// import fontFace from './fonts/fontface';
// import resetCSS from './generics/resetCSS';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  // ...resetCSS,
  // ...fontFace,
  html: {
    // fontFamily: '$galano',
    // fontWeight: '$regular',
    // overflow: 'hidden',
  },
});

export default globalStyles;
