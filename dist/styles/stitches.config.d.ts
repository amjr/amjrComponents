/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, {
    colors: {
        green: string;
        blue: string;
        grey: string;
        darkGrey: string;
        white: string;
    };
    fonts: unknown;
    fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
    };
    space: unknown;
    fontSizes: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    radii: {
        defaultRadius: string;
    };
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, import("@stitches/react/types/css-util").CSS<{
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, {
    colors: {
        green: string;
        blue: string;
        grey: string;
        darkGrey: string;
        white: string;
    };
    fonts: unknown;
    fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
    };
    space: unknown;
    fontSizes: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    radii: {
        defaultRadius: string;
    };
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, {
    colors: {
        green: string;
        blue: string;
        grey: string;
        darkGrey: string;
        white: string;
    };
    fonts: unknown;
    fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
    };
    space: unknown;
    fontSizes: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    radii: {
        defaultRadius: string;
    };
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
    }, {
        colors: {
            green: string;
            blue: string;
            grey: string;
            darkGrey: string;
            white: string;
        };
        fonts: unknown;
        fontWeights: {
            light: number;
            regular: number;
            medium: number;
            bold: number;
        };
        space: unknown;
        fontSizes: unknown;
        lineHeights: unknown;
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: unknown;
        borderStyles: unknown;
        radii: {
            defaultRadius: string;
        };
        shadows: unknown;
        zIndices: unknown;
        transitions: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xlg: string;
}, {
    colors: {
        green: string;
        blue: string;
        grey: string;
        darkGrey: string;
        white: string;
    };
    fonts: unknown;
    fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
    };
    space: unknown;
    fontSizes: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    radii: {
        defaultRadius: string;
    };
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
    }, {
        colors: {
            green: string;
            blue: string;
            grey: string;
            darkGrey: string;
            white: string;
        };
        fonts: unknown;
        fontWeights: {
            light: number;
            regular: number;
            medium: number;
            bold: number;
        };
        space: unknown;
        fontSizes: unknown;
        lineHeights: unknown;
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: unknown;
        borderStyles: unknown;
        radii: {
            defaultRadius: string;
        };
        shadows: unknown;
        zIndices: unknown;
        transitions: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        green: import("@stitches/react/types/theme").Token<"green", string, "colors", string>;
        blue: import("@stitches/react/types/theme").Token<"blue", string, "colors", string>;
        grey: import("@stitches/react/types/theme").Token<"grey", string, "colors", string>;
        darkGrey: import("@stitches/react/types/theme").Token<"darkGrey", string, "colors", string>;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", string>;
    };
    fonts: {};
    fontWeights: {
        light: import("@stitches/react/types/theme").Token<"light", string, "fontWeights", string>;
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", string>;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", string>;
    };
    space: {};
    fontSizes: {};
    lineHeights: {};
    letterSpacings: {};
    sizes: {};
    borderWidths: {};
    borderStyles: {};
    radii: {
        defaultRadius: import("@stitches/react/types/theme").Token<"defaultRadius", string, "radii", string>;
    };
    shadows: {};
    zIndices: {};
    transitions: {};
}, createTheme: <Argument0 extends string | ({
    colors?: {
        green?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        grey?: string | number | boolean | undefined;
        darkGrey?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {} | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    space?: {} | undefined;
    fontSizes?: {} | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    sizes?: {} | undefined;
    borderWidths?: {} | undefined;
    borderStyles?: {} | undefined;
    radii?: {
        defaultRadius?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {} | undefined;
    zIndices?: {} | undefined;
    transitions?: {} | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        green?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        grey?: string | number | boolean | undefined;
        darkGrey?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {} | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    space?: {} | undefined;
    fontSizes?: {} | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    sizes?: {} | undefined;
    borderWidths?: {} | undefined;
    borderStyles?: {} | undefined;
    radii?: {
        defaultRadius?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {} | undefined;
    zIndices?: {} | undefined;
    transitions?: {} | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, string> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, string>), config: {
    prefix: string;
    media: {
        xsm: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
    };
    theme: {
        colors: {
            green: string;
            blue: string;
            grey: string;
            darkGrey: string;
            white: string;
        };
        fonts: unknown;
        fontWeights: {
            light: number;
            regular: number;
            medium: number;
            bold: number;
        };
        space: unknown;
        fontSizes: unknown;
        lineHeights: unknown;
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: unknown;
        borderStyles: unknown;
        radii: {
            defaultRadius: string;
        };
        shadows: unknown;
        zIndices: unknown;
        transitions: unknown;
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {};
};
