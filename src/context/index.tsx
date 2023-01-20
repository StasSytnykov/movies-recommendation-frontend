import { useReducer, createContext, ReactNode } from "react";
import { defaultContext, DefaultContext, Tlocale } from "./defaultContext";
import { saveToStorage, STORAGE_KEY } from "../utils/localStorage";

export const AppContext = createContext(defaultContext);

export interface DefaultAction {
  type: "setLocale";
  locale: Tlocale;
}

const reducer = (
  state: DefaultContext,
  action: DefaultAction
): DefaultContext => {
  switch (action.type) {
    case "setLocale":
      saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [{ locale }, contextDispatch] = useReducer(reducer, defaultContext);

  return (
    <AppContext.Provider value={{ locale, contextDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
