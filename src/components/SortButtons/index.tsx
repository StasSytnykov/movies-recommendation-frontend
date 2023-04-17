import * as React from "react";
import { useIntl } from "react-intl";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Tooltip from "@mui/material/Tooltip";
import { Box, Typography } from "@mui/material";
import { Props } from "../SortedBar";
import {
  BoxStyles,
  TypographyStyles,
  ButtonStyles,
  StyledMenu,
  MenuItemStyles,
  DeviderStyles,
} from "./styles";
import { useLangugaeChange } from "../../hooks/useLanguageChange";

export const SortButtons = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  onOrderTypeChange,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { sortedByPopularity, sortedByReleaseDate, sortedByRating } =
    useLangugaeChange({ sortedByQuery, setSortedByQuery });
  const intl = useIntl();

  return (
    <Box sx={BoxStyles}>
      <Typography component="h3" variant="h4" sx={TypographyStyles}>
        {intl.formatMessage({
          id: "appBar.sortBy",
        })}
        :
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
        sx={ButtonStyles}
      >
        {sortedByQuery === "" ? sortedByPopularity : sortedByQuery}
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
          sx={MenuItemStyles}
          onClick={() => {
            handleClose();
            setSortedByQuery(sortedByPopularity);
          }}
          disableRipple
        >
          {sortedByPopularity}
        </MenuItem>
        <Divider sx={DeviderStyles} />
        <MenuItem
          sx={MenuItemStyles}
          onClick={() => {
            handleClose();
            setSortedByQuery(sortedByReleaseDate);
          }}
          disableRipple
        >
          {sortedByReleaseDate}
        </MenuItem>
        <Divider sx={DeviderStyles} />
        <MenuItem
          sx={MenuItemStyles}
          onClick={() => {
            handleClose();
            setSortedByQuery(sortedByRating);
          }}
          disableRipple
        >
          {sortedByRating}
        </MenuItem>
      </StyledMenu>
      <Tooltip
        title={
          sortedByType === "desc"
            ? intl.formatMessage({
                id: "appBar.tooltip.desc",
              })
            : intl.formatMessage({
                id: "appBar.tooltip.asc",
              })
        }
      >
        <Button variant="contained" onClick={onOrderTypeChange}>
          <SouthIcon sx={{ opacity: sortedByType === "desc" ? 1 : 0.5 }} />
          <NorthIcon sx={{ opacity: sortedByType === "asc" ? 1 : 0.5 }} />
        </Button>
      </Tooltip>
    </Box>
  );
};
