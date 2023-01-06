import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: 0;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
export default GlobalStyle;
