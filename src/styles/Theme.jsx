import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import mixins from './mixins';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[50],
            textColor: '#77ddaa',
            textColorLower: 'rgba(119, 221, 170, .6)',
            textColorLowest: 'rgba(119, 221, 170, .1)',
        },
        secondary: {
            main: '#ccd6f6',
            mainLowest: 'rgba(204,214,246,.15)',
            textColor: '#8892b0',
            // dark: will be calculated from palette.secondary.main,
        },
        background: blueGrey[900],
        secondaryBackground: blueGrey[800],
        hoverBackground: blueGrey[700],
        appBarBackground: blueGrey[900],
        drawerBackground: blueGrey[900],

        behindBackground: blueGrey[600],
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        headingColor: "#ffffff",
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,

        overrides: {
            MuiStepLabel: {
                label: {
                    color: blueGrey[50],
                    '&$active': {
                        color: blueGrey[50]
                    },
                },
            },
        },
    },
    mixins,
    fontSecondary: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
});
export default theme;