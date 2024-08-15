import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";
import { useTranslation } from "react-i18next";

const Help: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HelpWrapper data-testid="help">
      {commands(t).map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>
          {t("help.tab1")}&nbsp; =&gt; {t("help.tab2")}
        </div>
        <div>
          {t("help.up1")} &nbsp;&nbsp; =&gt; {t("help.up2")}
        </div>
        <div>
          {t("help.ctrl1")} {generateTabs(5)} =&gt; {t("help.ctrl2")}
        </div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
