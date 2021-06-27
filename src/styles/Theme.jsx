import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#37474f',
            textColor: '#77ddaa',
            textColorLower: 'rgba(119, 221, 170, .6)',
            textColorLowest: 'rgba(119, 221, 170, .1)',
        },
        secondary: {
            main: '#ccd6f6',
            mainTint: 'rgba(204,214,246,.8)',
            mainLower: 'rgba(204,214,246,.6)',
            mainEvenLower: 'rgba(204,214,246,.4)',
            mainLowest: 'rgba(204,214,246,.15)',
            textColor: '#8892b0',
        },
        background: blueGrey[900],
    },
    fontSecondary: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
});
export default theme;