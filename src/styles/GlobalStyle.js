import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


body {
    margin: 0;
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgb(220, 221, 222);
    background-color: rgb(54, 57, 63);
    font-size: 20px;
    font-weight: 300;
    h2 {
        font-weight: 300;
        font-size: 32px;
    }
 .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    height: 18em;
  }

}

`;

export default GlobalStyle;
