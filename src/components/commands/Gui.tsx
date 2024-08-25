import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../../contexts/Term";
const Gui: React.FC = () => {
  const { history, reRender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  if (reRender && currentCommand[0] === "gui") {
    window.open("https://bernardomarques.dev/", "_blank");
  }

  return <span></span>;
};

export default Gui;
