import { Box, Drawer, List, ListItem } from "@mui/material";
import React from "react";
import { LanguageButtons } from "../LanguageButtons";

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
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <LanguageButtons />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);
