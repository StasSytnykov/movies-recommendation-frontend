import { Box, Drawer, List, ListItem } from "@mui/material";
import { LanguageButtons } from "../LanguageButtons";
import { BoxStyles, ListItemStyles } from "./styles";

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
    <Box sx={BoxStyles} role="presentation">
      <List>
        <ListItem sx={ListItemStyles}>
          <LanguageButtons />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);
