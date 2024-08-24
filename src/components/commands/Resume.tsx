import { ResumeIntro, ResumeWrapper } from "../styles/Resume.styled";

const Resume: React.FC = () => {
  return (
    <ResumeWrapper data-testid="resume">
      <ResumeIntro>Clique na lingua desejada para o currículo</ResumeIntro>
      <a href="/bernardo_marques_pt.pdf" download className="link">
        Português
      </a>{" "}
      |{" "}
      <a href="/bernardo_marques_en.pdf" download className="link">
        English
      </a>{" "}
      |{" "}
      <a href="/bernardo_marques_es.pdf" download className="link">
        Español
      </a>
    </ResumeWrapper>
  );
};

export default Resume;
