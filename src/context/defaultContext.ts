import { DefaultAction } from "./index";
import React from "react";
import { getFromStorage, STORAGE_KEY } from "../utils/localStorage";

type Locales = {
  ENGLISH: "en-us";
  UKRANIAN: "uk";
};

export const LOCALES: Locales = {
  ENGLISH: "en-us",
  UKRANIAN: "uk",
};

export type Tlocale = "en-us" | "uk";

export interface DefaultContext {
  locale: Tlocale;
  contextDispatch: React.Dispatch<DefaultAction>;
}

export const defaultContext: DefaultContext = {
  locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
  contextDispatch: () => {},
};
