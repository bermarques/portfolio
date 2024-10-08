import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 550px) {
    display: none;
  }

  user-select: none;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row-reverse;
  height: 24px;
  background-color: #2c2c2c;
  padding: 4px 12px;
  cursor: default;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  padding: 2px;
  width: 14px;
  height: 14px;
  transition: 200ms;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #363636;
  }
`;
export const CloseContainer = styled.div`
  padding: 2px;
  transition: 200ms;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background: #e64f0b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #f15f1c;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Title = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  align-self: center;
  user-select: none;
  margin-right: -70px;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;
