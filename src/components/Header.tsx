import { Minus, Square, X } from "lucide-react";
import {
  Actions,
  CloseContainer,
  IconContainer,
  Wrapper,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Header;
