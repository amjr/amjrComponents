"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fontFace from './fonts/fontface';
// import resetCSS from './generics/resetCSS';
const stitches_config_1 = require("./stitches.config");
const globalStyles = (0, stitches_config_1.globalCss)({
    // ...resetCSS,
    // ...fontFace,
    html: {
    // fontFamily: '$galano',
    // fontWeight: '$regular',
    // overflow: 'hidden',
    },
});
exports.default = globalStyles;
