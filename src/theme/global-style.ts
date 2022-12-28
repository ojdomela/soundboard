import { DefaultTheme } from "global";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

${({ theme }: { theme: DefaultTheme }) => css`
  body {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.text};
  }
`}

body {
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

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

body.preload, .preload *, .preload *::before, .preload *::after {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
}

@media (max-width: 768px) {
    html {
        font-size: 50%;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 40%;
    }
}
`;

export default GlobalStyle;
