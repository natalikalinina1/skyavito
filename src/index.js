import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.styles';
import { store } from './store';
import { Provider } from 'react-redux';


// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
 
    </Provider>
  </React.StrictMode>
);