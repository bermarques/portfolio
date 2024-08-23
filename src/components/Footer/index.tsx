import { Wrapper } from "../styles/Footer.styled";
import Item from "./Item";

const Footer = () => {
  return (
    <Wrapper>
      <Item image="terminal-icon" active={true} />
      <Item image="libre-office" active={false} />
    </Wrapper>
  );
};

export default Footer;
