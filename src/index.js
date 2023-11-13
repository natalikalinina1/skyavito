import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);