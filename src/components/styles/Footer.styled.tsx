import styled from "styled-components";
import { EnumStatus } from "../../contexts/Terminal";

export const Wrapper = styled.div<{ status: EnumStatus; maximized: boolean }>`
  @media (max-width: 550px) {
    display: none;
  }
  box-sizing: border-box;
  background: #2c2c2cb3;
  padding: 12px 4px;
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65px;
  position: fixed;
  ${(props) =>
    props.status === EnumStatus.OPEN && props.maximized && `position: static;`}
  left: 0;
  height: 100vh;
`;

export const ItemContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  position: relative;
  cursor: pointer;

  &.pressed {
    background: #8f8e8e8f !important;
  }
  &:hover {
    background: #8f8e8e29;
  }

  img {
    user-select: none;
    height: 45px;
  }
`;

export const ActiveDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #eb5323;
  position: absolute;
  left: 0;
`;
