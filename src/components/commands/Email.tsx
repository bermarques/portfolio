import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../../contexts/Term";
const Email: React.FC = () => {
  const { history, reRender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  if (reRender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + "bernardohmarques@gmail.com", "_self");
  }

  return (
    <Wrapper>
      <span>bernardohmarques@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
