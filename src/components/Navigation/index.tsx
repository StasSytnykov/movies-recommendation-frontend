import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { NavDrawer } from "./NavDrawer";
import { LanguageButtons } from "./LanguageButtons";

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box>
      <AppBar position="static" sx={{ height: "60px" }}>
        <Toolbar>
          <Hidden only={["lg", "xl", "md", "sm"]}>
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

          <Hidden only={["xs"]}>
            <LanguageButtons />
          </Hidden>
        </Toolbar>
      </AppBar>
      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};
