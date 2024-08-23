import { ActiveDot, ItemContainer } from "../../styles/Footer.styled";
import { IItem } from "./types";

const Item: React.FC<IItem> = ({ image, active }) => {
  return (
    <ItemContainer>
      <img src={`src/assets/${image}.webp`} alt="Icon" />
      {active && <ActiveDot />}
    </ItemContainer>
  );
};

export default Item;
