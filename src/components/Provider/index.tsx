import { Provider as I18nProvider } from "../i18n/Provider";
import { ReactNode, useContext } from "react";
import { AppContext } from "../../context";

interface Props {
  children: ReactNode;
}

export const ProviderWrapper = ({ children }: Props) => {
  const { locale } = useContext(AppContext);

  return <I18nProvider locale={locale}>{children}</I18nProvider>;
};
