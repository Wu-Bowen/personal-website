import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Website from './components/Website';
import theme from './styles/Theme';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Website />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
