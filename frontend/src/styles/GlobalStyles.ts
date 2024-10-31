import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Inter, Helvetica, Sans-Serif;
    background-color: #1A1A1A;
  }
`;

export default GlobalStyle;