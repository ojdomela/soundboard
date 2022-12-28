import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../theme";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const setNewDarkMode = (isDarkMode: boolean) => {
    setDarkMode(isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  };

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode));
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(false);
    }
    setIsLoaded(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.querySelector("body")?.classList.remove("preload");
    }
  }, [isLoaded]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component
        {...pageProps}
        isDarkMode={isDarkMode}
        setDarkMode={setNewDarkMode}
      />
    </ThemeProvider>
  );
}
