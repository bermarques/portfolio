import { createContext } from "react";

export enum EnumStatus {
  OPEN,
  CLOSED,
  MINIMIZED,
}

interface IStatus {
  status: EnumStatus;
  setStatus: (status: EnumStatus) => void;
  maximized: boolean;
  setMaximized: (maximized: boolean) => void;
}

export const terminalContext = createContext<IStatus>({
  status: EnumStatus.OPEN,
  setStatus: () => {},
  maximized: false,
  setMaximized: () => {},
});
