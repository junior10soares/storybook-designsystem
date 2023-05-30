import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { //padrao 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {// para add inf de estilazação
        ...defaultThemeMap,
        height: 'space',//colocar essa inf do space
        width: 'space',
    },

    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
    },
})