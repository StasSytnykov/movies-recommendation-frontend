import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { BoxStyles, IconButtonStyles, MenuStyles } from "./styles";

interface Props {
  titleButton: string;
  onMovieSelect?: () => void;
  onMovieDelete?: () => void;
}

export const OptionButton = ({
  titleButton,
  onMovieSelect,
  onMovieDelete,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={BoxStyles}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={IconButtonStyles}
      >
        <MoreVertIcon color={"primary"} />
      </IconButton>
      <Menu
        sx={MenuStyles}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "150px",
            backgroundColor: grey[100],
            position: "relative",
            opacity: 0.9,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onMovieSelect && onMovieSelect();
            onMovieDelete && onMovieDelete();
          }}
        >
          {titleButton}
        </MenuItem>
      </Menu>
    </Box>
  );
};
