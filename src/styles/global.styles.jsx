import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    background: #F1F1F1;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
  }
  
  a, 
  a:visited {
    text-decoration: none;    
    cursor: pointer;
    color: ${({ theme }) => theme.colors.graniteGray};
  }
  
  button {
    cursor: pointer;
  }
`;
export const theme = {
  colors: {
    black: '#000000',
    lighterBlack: 'rgba(0, 0, 0, 0.2)',
    white: '#ffffff',
    darkerWhite: 'rgba(255, 255, 255, 0.15)',
    imgBackGround: '#F0F0F0',
    lightSilver: '#D9D9D9',
    graniteGray: '#5F5F5F',
    primaryBlue: '#009EE4',
    hoverBlue: '#0080C1',
  },
};

export default GlobalStyle;
