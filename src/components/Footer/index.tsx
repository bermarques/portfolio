import { Wrapper } from "../styles/Footer.styled";
import Item from "./Item";

const Footer = () => {
  return (
    <Wrapper>
      <Item image="terminal-icon" active={true} />
      <Item
        image="libre-office"
        active={false}
        onClick={() => window.open("resume_pt.pdf", "_blank", "fullscreen=yes")}
      />
    </Wrapper>
  );
};

export default Footer;
