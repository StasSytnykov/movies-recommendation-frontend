import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

export const NavDrawer = ({ isDrawerOpen, setIsDrawerOpen }: Props) => (
  <Drawer
    anchor="left"
    open={isDrawerOpen}
    onClose={() => setIsDrawerOpen(false)}
  >
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
  </Drawer>
);
