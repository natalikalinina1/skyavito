import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    background: #F1F1F1;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
  }
  
  a, 
  a:visited{
    text-decoration: none;    
    cursor: pointer;
    color: #ffffff;
  }
  button{
    cursor: pointer;
  }
`

export default GlobalStyle