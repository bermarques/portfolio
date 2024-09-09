import { Github, Minus, Square, X } from "lucide-react";
import {
  Actions,
  CloseContainer,
  IconContainer,
  Title,
  Wrapper,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <Wrapper className="draggable">
      <Actions>
        <IconContainer>
          <Minus />
        </IconContainer>
        <IconContainer>
          <Square size={10} />
        </IconContainer>
        <CloseContainer>
          <X size={12} strokeWidth={3} />
        </CloseContainer>
      </Actions>
      <Title href="https://github.com/bermarques" target="_blank">
        <Github size={14} />
        github.com/bermarques
      </Title>
      <div></div>
    </Wrapper>
  );
};

export default Header;
