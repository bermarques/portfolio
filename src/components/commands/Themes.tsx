import { useContext, useEffect } from "react";
import _ from "lodash";
import { themeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import {
  checkThemeSwitch,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../../contexts/Term";
import theme from "../styles/themes";
import Usage from "../Usage";

const myThemes = _.keys(theme);

const Themes: React.FC = () => {
  const { arg, history, reRender } = useContext(termContext);

  const themeSwitcher = useContext(themeContext);

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkThemeSwitch(reRender, currentCommand, myThemes)) {
      themeSwitcher?.(theme[currentCommand[2]]);
    }
  }, [arg, reRender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(arg, "set", myThemes) ? <Usage cmd="themes" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <Wrapper data-testid="themes">
      <ThemesWrapper>
        {myThemes.map((myTheme) => (
          <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
        ))}
      </ThemesWrapper>
      <Usage cmd="themes" marginY />
    </Wrapper>
  );
};

export default Themes;
