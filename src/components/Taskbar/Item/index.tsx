import { useEffect, useRef } from "react";
import { ActiveDot, ItemContainer } from "../../styles/Taskbar.styled";
import { IItem } from "./types";

const Item: React.FC<IItem> = ({ image, active, onClick }) => {
  const myRef = useRef<HTMLDivElement>(null);

  const addPressedClass = (e: Event) => {
    e.stopPropagation();
    const button = e.currentTarget as HTMLElement;
    button.classList.add("pressed");
  };

  const removePressedClass = (e: Event) => {
    e.stopPropagation();
    const button = e.currentTarget as HTMLElement;
    button.classList.remove("pressed");
  };

  useEffect(() => {
    myRef.current?.addEventListener?.("mousedown", addPressedClass);
    myRef.current?.addEventListener?.("mouseup", removePressedClass);
    myRef.current?.addEventListener?.("mouseout", removePressedClass);
  }, []);

  return (
    <ItemContainer id="terminal-item" ref={myRef} onClick={onClick}>
      <img src={`src/assets/${image}.webp`} alt="Icon" draggable="false" />
      {active && <ActiveDot />}
    </ItemContainer>
  );
};

export default Item;
