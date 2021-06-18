import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
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
            mainLower: 'rgba(204,214,246,.6)',
            mainLowest: 'rgba(204,214,246,.15)',
            textColor: '#8892b0',
        },
        background: blueGrey[900],
    },
    fontSecondary: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
});
export default theme;