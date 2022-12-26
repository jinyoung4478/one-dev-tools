import { ThemeProvider } from 'styled-components';
import Router from 'Router';
import GlobalStyle from 'styles/GlobalStyle';
import { Reset } from 'styled-reset';
import { lightTheme } from 'styles/theme';

function App() {
   return (
      <ThemeProvider theme={lightTheme}>
         <Reset />
         <GlobalStyle />
         <Router />
      </ThemeProvider>
   );
}

export default App;
