import { ResumeIntro, ResumeWrapper } from "../styles/Resume.styled";

const Resume: React.FC = () => {
  return (
    <ResumeWrapper data-testid="resume">
      <ResumeIntro>Clique na lingua desejada para o currículo</ResumeIntro>
      <a href="/resume_pt.pdf" download className="link">
        Português
      </a>{" "}
      |{" "}
      <a href="/resume_en.pdf" download className="link">
        English
      </a>{" "}
      |{" "}
      <a href="/resume_es.pdf" download className="link">
        Español
      </a>
    </ResumeWrapper>
  );
};

export default Resume;
