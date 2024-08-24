import { Wrapper } from "../styles/Footer.styled";
import Item from "./Item";

const Footer = () => {
  return (
    <Wrapper>
      <Item image="terminal-icon" active={true} />
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
