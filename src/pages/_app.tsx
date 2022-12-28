import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../theme";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.querySelector("body")?.classList.remove("preload");
  }, []);


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
