import { Github, Minus, Square, X } from "lucide-react";
import {
  Actions,
  CloseContainer,
  IconContainer,
  Title,
  Wrapper,
} from "./styles/Header.styled";
import { useContext } from "react";
import { EnumStatus, terminalContext } from "../contexts/Terminal";
import { termContext } from "../contexts/Term";

const Header = () => {
  const context = useContext(terminalContext);
  const { setHistory } = useContext(termContext);

  const handleCloseTerminal = () => {
    setHistory?.(["welcome"]);
    context.setStatus(EnumStatus.CLOSED);
  };

  return (
    <Wrapper>
      <Actions>
        <IconContainer onClick={() => context.setStatus(EnumStatus.MINIMIZED)}>
          <Minus />
        </IconContainer>
        <IconContainer>
          <Square
            size={10}
            onClick={() => context.setStatus(EnumStatus.MAXIMIZED)}
          />
        </IconContainer>
        <CloseContainer onClick={handleCloseTerminal}>
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
