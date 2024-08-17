/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import themes from "../components/styles/themes.ts";
import { setToLS, getFromLS } from "../utils/storage.ts";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.ubuntu);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.ubuntu);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
