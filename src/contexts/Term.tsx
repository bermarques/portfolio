import { createContext } from "react";

type Term = {
  arg: string[];
  history: string[];
  setHistory: (history: string[]) => void;
  reRender: boolean;
  setRerender: (value: boolean) => void;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  setHistory: () => {},
  reRender: false,
  setRerender: () => {},
  index: 0,
});
