import { useTranslation } from "react-i18next";
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper data-testid="about">
      <p>
        {t("about.introduction")}{" "}
        <HighlightSpan>Bernardo Marques</HighlightSpan>!
      </p>
      <p>
        {t("about.text1")} <HighlightAlt>{t("about.role")}</HighlightAlt>{" "}
        {t("about.text2")}
      </p>
      <p>
        {t("about.description1")} <br /> {t("about.description2")}
      </p>
    </AboutWrapper>
  );
};

export default About;
