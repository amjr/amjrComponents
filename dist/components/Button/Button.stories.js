"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
exports.default = {
    title: 'Components/common/Button',
    component: Button_1.default,
    argTypes: {
        label: {
            conrtol: 'text',
            defaultValue: 'sample text',
        },
    },
};
const Default = (props) => (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({}, props));
exports.Default = Default;
