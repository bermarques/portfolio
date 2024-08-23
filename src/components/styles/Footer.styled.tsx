import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
  box-sizing: border-box;
  background: #2c2c2c8f;
  padding: 12px 18px;
  gap: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 70px;
  min-width: 300px;
  position: fixed;
  bottom: 20px;
  border-radius: 18px;
`;

export const ItemContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #2c2c2c76;
  }

  img {
    height: 40px;
  }
`;

export const ActiveDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #eb5323;
  position: absolute;
  bottom: 1px;
`;
