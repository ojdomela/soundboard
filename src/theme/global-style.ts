import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

ol,
ul {
    list-style: none;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
