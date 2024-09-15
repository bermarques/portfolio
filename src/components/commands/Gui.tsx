import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "gui") {
    window.open("https://github.com/bermarques/", "_blank");
  }

  return <span></span>;
};

export default Gui;
