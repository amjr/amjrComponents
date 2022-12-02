/// <reference types="react" />
import { ButtonProps } from './Button.types';
declare const _default: {
    title: string;
    component: ({ label }: ButtonProps) => JSX.Element;
    argTypes: {
        label: {
            conrtol: string;
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Default: (props: ButtonProps) => JSX.Element;
