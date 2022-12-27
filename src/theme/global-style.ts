import { DefaultTheme } from 'global';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${({ theme }: {theme: DefaultTheme}) => css`
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`}

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
