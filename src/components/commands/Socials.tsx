import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { useTranslation } from "react-i18next";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const { t } = useTranslation();

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? <Usage cmd="socials" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>{t("socials.intro")}</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/bermarques",
    tab: 3,
  },
  {
    id: 2,
    title: "Facebook",
    url: "https://www.facebook.com/bermarques",
    tab: 1,
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://instagram.com/bermarques",
    tab: 0,
  },
];

export default Socials;
