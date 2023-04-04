import React, { useCallback, useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { US, UA } from "country-flag-icons/react/3x2";
import { Link as RouterLink } from "react-router-dom";
import { AppContext } from "../../context";
import { Tlocale, LOCALES } from "../../context/defaultContext";
import { NavDrawer } from "./NavDrawer";

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { locale, contextDispatch } = useContext(AppContext);

  const setLanguage = useCallback(
    (locale: Tlocale) => {
      contextDispatch({ type: "setLocale", locale });
    },
    [contextDispatch]
  );

  return (
    <Box>
      <AppBar position="static" sx={{ height: "60px" }}>
        <Toolbar>
          <Hidden only={["lg", "xl", "md"]}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Link
              to={"/"}
              component={RouterLink}
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                <FormattedMessage id="headerTab.recommend" />
              </Typography>
            </Link>
          </Box>

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

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"settings"} component={RouterLink}>
              <Button sx={{ color: "white", display: "block" }}>
                <FormattedMessage id="headerTab.settings" />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};
