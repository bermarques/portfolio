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
  const { setStatus, maximized, setMaximized } = useContext(terminalContext);
  const { setHistory } = useContext(termContext);

  const handleCloseTerminal = () => {
    setHistory?.(["welcome"]);
    setMaximized(false);
    setStatus(EnumStatus.CLOSED);
  };

  const handleResize = () => {
    setMaximized(!maximized);
  };

  return (
    <Wrapper>
      <Actions>
        <IconContainer onClick={() => setStatus(EnumStatus.MINIMIZED)}>
          <Minus />
        </IconContainer>
        <IconContainer onClick={handleResize}>
          <Square size={10} />
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
