import React, { useCallback, useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { US, UA } from "country-flag-icons/react/3x2";
import { Link as RouterLink } from "react-router-dom";
import { AppContext } from "../../context";
import { Tlocale, LOCALES } from "../../context/defaultContext";

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { locale, contextDispatch } = useContext(AppContext);

  const setLanguage = useCallback(
    (locale: Tlocale) => {
      contextDispatch({ type: "setLocale", locale });
    },
    [contextDispatch]
  );

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <Link
            to={"settings"}
            component={RouterLink}
            sx={{ textDecoration: "none", textTransform: "upperCase" }}
          >
            <ListItemButton
              onClick={() => setIsDrawerOpen(false)}
              sx={{ width: 218 }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
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
              sx={{ my: 2, opacity: locale === LOCALES.ENGLISH ? 1 : 0.5 }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              <US title="United States" />
            </Button>
            <Button
              disabled={locale === LOCALES.UKRANIAN}
              sx={{ my: 2, opacity: locale === LOCALES.UKRANIAN ? 1 : 0.5 }}
              onClick={() => setLanguage(LOCALES.UKRANIAN)}
            >
              <UA title="Ukraine" />
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"settings"} component={RouterLink}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <FormattedMessage id="headerTab.settings" />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
