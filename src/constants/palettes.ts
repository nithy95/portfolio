import { ThemeOptions } from "@mui/material/styles";

const themeOptions = new Map([
    ["#0277bd",
        {
            primary: {
                main: '#0277bd',
            },
            secondary: {
                main: '#01579b',
            },
        },

    ],
    ["#00838f", {
        primary: {
            main: '#00838f',
        },
        secondary: {
            main: '#006064',
        },

    }],
    ["#78909c",
        {
            primary: {
                main: '#78909c',
            },
            secondary: {
                main: '#455a64',
            },
        },

    ],
    ["#ff7043",
        {
            primary: {
                main: '#ff7043',
            },
            secondary: {
                main: '#bf360c',
            },
        },

    ]
])

export const defaultPalette: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#1e559a',
        },
        secondary: {
            main: '#6c757d',
        },
    },
    components:{
        MuiTypography:{
            styleOverrides:{
                h3:{
                    fontFamily: "'Righteous', cursive",
                }
            }
        }
    }
};

export const defaultColor = '#0277bd'

export const defaultTheme = 'dark'

export const darkThemeSuggestion = ['#00838f']

export const lightThemeSuggestion = ['#ff7043']

export const backgoroundPalette = new Map([
    ['dark', {
        background: {
            default: '#303030',
            paper: '#424242',
        },
    }],
    ['light', {
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
    }]
])

export default themeOptions
