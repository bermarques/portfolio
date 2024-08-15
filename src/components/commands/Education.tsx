import { useTranslation } from "react-i18next";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { TFunction } from "i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper data-testid="education">
      <EduIntro>{t("education.intro")}</EduIntro>
      {eduBg(t).map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = (t: TFunction<"translation", undefined>) => [
  {
    title: t("education.title1"),
    desc: t("education.desc1"),
  },
];

export default Education;
