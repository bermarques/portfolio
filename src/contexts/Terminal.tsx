import { createContext } from "react";

export enum EnumStatus {
  OPEN,
  CLOSED,
  MINIMIZED,
  MAXIMIZED,
}

interface IStatus {
  status: EnumStatus;
  setStatus: (status: EnumStatus) => void;
}

export const terminalContext = createContext<IStatus>({
  status: EnumStatus.OPEN,
  setStatus: () => {},
});
