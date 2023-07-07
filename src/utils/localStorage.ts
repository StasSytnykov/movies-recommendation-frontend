import { Tlocale } from "../context/defaultContext";

export const STORAGE_KEY = "locale";

export const saveToStorage = (name: "locale", data: Tlocale) => {
  if (!window || !window.localStorage) {
    return;
  }

  if (!data) {
    window.localStorage.setItem(name, JSON.stringify("en-us"));
  } else {
    window.localStorage.setItem(name, JSON.stringify(data));
  }
};

export const getFromStorage = (name: "locale") => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    const data = window.localStorage.getItem(name);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(e);

    return null;
  }
};
