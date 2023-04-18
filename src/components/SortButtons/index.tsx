import * as React from "react";
import { useIntl } from "react-intl";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import { Props } from "../../conteiners/SortedBar";
import {
  TypographyStyles,
  ButtonStyles,
  StyledMenu,
  MenuItemStyles,
  DeviderStyles,
} from "./styles";
import { useLangugaeChange } from "../../hooks/useLanguageChange";

type PropsSortBtns = Omit<Props, "sortedByType" | "onOrderTypeChange">;

export const SortButtons = ({
  sortedByQuery,
  setSortedByQuery,
}: PropsSortBtns) => {
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
    <>
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
    </>
  );
};
