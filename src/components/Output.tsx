import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { useTranslation } from "react-i18next";
import Experience from "./commands/Experience";
import Resume from "./commands/Resume";

type Props = {
  index: number;
  cmd: string;
  arg: string[];
};

const Output: React.FC<Props> = ({ index, cmd, arg }) => {
  const { t } = useTranslation();

  const specialCmds = ["projects", "socials", "themes", "echo"];

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return (
      <UsageDiv data-testid="usage-output">
        {t("usage")}: {cmd}
      </UsageDiv>
    );

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          experience: <Experience />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/bernardomarques</GeneralOutput>,
          resume: <Resume />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
