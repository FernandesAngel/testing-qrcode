import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1366px){
    html {
      font-size: 96%;
    }
  }
  @media(max-width: 1080px){
    html {
      font-size: 93%;
    }
  }
  @media(max-width: 720px){
    html {
      font-size: 90%;
    }
  }
  @media(max-width: 320px){
    html {
      font-size: 86%;
    }
  }
  @media(max-width: 280px){
    html {
      font-size: 80%;
    }
  }

  :focus{
    outline: none;
  }

  body {
    background: ${(props) => props.theme.colors.white100};
    color: ${(props) => props.theme.colors.grey900};
  }

  body, input-security, select, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  button {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
  .menu-active{
    background-color: ${(props) => props.theme.colors.purple700};
  }
`;
