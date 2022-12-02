"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.createTheme = exports.theme = exports.getCssText = exports.keyframes = exports.globalCss = exports.css = exports.styled = void 0;
const react_1 = require("@stitches/react");
const theme_1 = __importDefault(require("./theme"));
_a = (0, react_1.createStitches)(theme_1.default), exports.styled = _a.styled, exports.css = _a.css, exports.globalCss = _a.globalCss, exports.keyframes = _a.keyframes, exports.getCssText = _a.getCssText, exports.theme = _a.theme, exports.createTheme = _a.createTheme, exports.config = _a.config;
