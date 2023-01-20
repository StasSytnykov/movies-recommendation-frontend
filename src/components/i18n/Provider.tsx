import { Fragment, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES, Tlocale } from "../../context/defaultContext";
import { messages } from "./messages";
const flatten = require("flat");

interface Props {
  children: ReactNode;
  locale: Tlocale;
}

export const Provider = ({ children, locale = LOCALES.ENGLISH }: Props) => {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={flatten(messages[locale])}
    >
      {children}
    </IntlProvider>
  );
};
