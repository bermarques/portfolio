import { useTranslation } from "react-i18next";
import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "themes" | "projects" | "socials";
  marginY?: boolean;
};

const arg = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
  projects: { placeholder: "project-no", example: "4" },
  socials: { placeholder: "social-no", example: "1" },
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const action = cmd === "themes" ? "set" : "go";
  const { t } = useTranslation();
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      {t("usage")}: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      {t("eg")}: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
