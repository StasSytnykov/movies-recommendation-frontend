import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Tooltip from "@mui/material/Tooltip";
import { Box, Typography } from "@mui/material";
import { Props } from "../SortedBar";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 160,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const SORTED_BY_POPULARITY = "Popularity";
const SORTED_BY_RELEASE_DATE = "Release date";
const SORTED_BY_RATING = "Rating";

export const SortButtons = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  setSortedByType,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOrderTypeChange = () => {
    switch (sortedByType) {
      case "desc":
        setSortedByType("asc");
        break;

      default:
        setSortedByType("desc");
        break;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Typography component="h3" variant="h4" sx={{ marginRight: "10px" }}>
        Sorted by:
      </Typography>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ width: 160, marginRight: 1 }}
      >
        {sortedByQuery === "" ? SORTED_BY_POPULARITY : sortedByQuery}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setSortedByQuery(SORTED_BY_POPULARITY);
          }}
          disableRipple
        >
          {SORTED_BY_POPULARITY}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            handleClose();
            setSortedByQuery(SORTED_BY_RELEASE_DATE);
          }}
          disableRipple
        >
          {SORTED_BY_RELEASE_DATE}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            handleClose();
            setSortedByQuery(SORTED_BY_RATING);
          }}
          disableRipple
        >
          {SORTED_BY_RATING}
        </MenuItem>
      </StyledMenu>
      <Tooltip
        title={sortedByType === "desc" ? "Descending order" : "Ascending order"}
      >
        <Button variant="contained" onClick={onOrderTypeChange}>
          <SouthIcon sx={{ opacity: sortedByType === "desc" ? 1 : 0.5 }} />
          <NorthIcon sx={{ opacity: sortedByType === "asc" ? 1 : 0.5 }} />
        </Button>
      </Tooltip>
    </Box>
  );
};
