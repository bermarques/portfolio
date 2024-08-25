import styled from "styled-components";
import { EnumStatus } from "../../contexts/Terminal";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;
  background-color: ${({ theme }) => theme.colors?.body};

  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  @media (min-width: 550px) {
    height: 475px;
  }
`;

export const Container = styled.div<{ status: EnumStatus }>`
  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    height: 500px;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid #2c2c2c;
    margin: 20px;
    cursor: text;
  }
  &&& {
    ${(props) =>
      (props.status === EnumStatus.CLOSED ||
        props.status === EnumStatus.MINIMIZED) &&
      "display: none;"}
  }
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

export const Input = styled.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;
