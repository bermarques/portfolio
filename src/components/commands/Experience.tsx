import { useTranslation } from "react-i18next";
import { ExpIntro, ExpList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";
import { TFunction } from "i18next";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper data-testid="experience">
      <ExpIntro>{t("experience.intro")}</ExpIntro>
      {expBg(t).map(({ title, desc }) => (
        <ExpList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </ExpList>
      ))}
    </Wrapper>
  );
};

const expBg = (t: TFunction<"translation", undefined>) => [
  {
    title: t("experience.title1"),
    desc: t("experience.desc1"),
  },
  {
    title: t("experience.title2"),
    desc: t("experience.desc2"),
  },
  {
    title: t("experience.title3"),
    desc: t("experience.desc3"),
  },
];

export default Experience;
