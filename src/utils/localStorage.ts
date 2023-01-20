import { Tlocale } from "../context/defaultContext";

export const STORAGE_KEY = "locale";

export const saveToStorage = (name: "locale", data: Tlocale) => {
  if (!window || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name: "locale") => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    return JSON.parse(window.localStorage.getItem(name) || "");
  } catch (e) {
    console.error(e);

    return null;
  }
};
