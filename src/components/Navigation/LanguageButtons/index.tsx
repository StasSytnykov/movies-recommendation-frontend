import React, { useCallback, useContext } from "react";
import { AppContext } from "../../../context";
import { Box, Button } from "@mui/material";
import { LOCALES, Tlocale } from "../../../context/defaultContext";
import { UA, US } from "country-flag-icons/react/3x2";

export const LanguageButtons = () => {
  const { locale, contextDispatch } = useContext(AppContext);

  const setLanguage = useCallback(
    (locale: Tlocale) => {
      contextDispatch({ type: "setLocale", locale });
    },
    [contextDispatch]
  );
  return (
    <Box>
      <Button
        disabled={locale === LOCALES.ENGLISH}
        sx={{ opacity: locale === LOCALES.ENGLISH ? 1 : 0.5 }}
        onClick={() => setLanguage(LOCALES.ENGLISH)}
      >
        <US title="United States" />
      </Button>
      <Button
        disabled={locale === LOCALES.UKRAINIAN}
        sx={{ opacity: locale === LOCALES.UKRAINIAN ? 1 : 0.5 }}
        onClick={() => setLanguage(LOCALES.UKRAINIAN)}
      >
        <UA title="Ukraine" />
      </Button>
    </Box>
  );
};
