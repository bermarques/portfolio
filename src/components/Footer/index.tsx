import { useContext } from "react";
import { Wrapper } from "../styles/Footer.styled";
import Item from "./Item";
import { EnumStatus, terminalContext } from "../../contexts/Terminal";

const Footer = () => {
  const { status, setStatus, maximized } = useContext(terminalContext);

  const handleTerminal = () => {
    switch (status) {
      case EnumStatus.CLOSED:
      case EnumStatus.MINIMIZED:
        setStatus(EnumStatus.OPEN);
        break;
      case EnumStatus.OPEN:
        setStatus(EnumStatus.MINIMIZED);
        break;
      default:
        break;
    }
  };
  return (
    <Wrapper maximized={maximized} status={status}>
      <Item
        image="terminal-icon"
        active={status !== EnumStatus.CLOSED}
        onClick={handleTerminal}
      />
      <Item
        image="libre-office"
        active={false}
        onClick={() =>
          window.open("bernardo_marques_pt.pdf", "_blank", "fullscreen=yes")
        }
      />
    </Wrapper>
  );
};

export default Footer;
