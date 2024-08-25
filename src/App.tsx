/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme.ts";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer/index.tsx";
import { EnumStatus, terminalContext } from "./contexts/Terminal.tsx";
import { termContext } from "./contexts/Term.tsx";

export const themeContext = createContext<
  ((switchTheme: DefaultTheme) => void) | null
>(null);

function App() {
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [terminalStatus, setTerminalStatus] = useState(EnumStatus.OPEN);
  const [maximizedTerminal, setMaximizedTerminal] = useState(false);

  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [reRender, setRerender] = useState(false);

  const clearHistory = () => {
    setCmdHistory([]);
  };

  const termContextValue = {
    arg: [],
    history: cmdHistory,
    setHistory: setCmdHistory,
    reRender: reRender,
    setRerender: setRerender,
    index: 0,
    clearHistory: clearHistory,
  };
  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
      },
      false
    );
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    const themeColor = theme.colors?.body;

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector(
      "meta[name='msapplication-TileColor']"
    );

    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    maskIcon && maskIcon.setAttribute("color", themeColor);
  }, [selectedTheme]);

  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      <h1 className="sr-only" aria-label="Portfolio">
        Portfolio
      </h1>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle theme={selectedTheme} />
          <themeContext.Provider value={themeSwitcher}>
            <termContext.Provider value={termContextValue}>
              <terminalContext.Provider
                value={{
                  status: terminalStatus,
                  setStatus: setTerminalStatus,
                  maximized: maximizedTerminal,
                  setMaximized: setMaximizedTerminal,
                }}
              >
                <Footer />
                <Terminal />
              </terminalContext.Provider>
            </termContext.Provider>
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
