import { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { useTranslation } from "react-i18next";
import { termContext } from "../../contexts/Term";

const Clear: React.FC = () => {
  const { arg, clearHistory } = useContext(termContext);
  const { t } = useTranslation();
  useEffect(() => {
    if (arg.length < 1) clearHistory?.();
  }, []);
  return arg.length > 0 ? <UsageDiv>{t("usage")}: clear</UsageDiv> : <></>;
};

export default Clear;
