import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useIntl } from "react-intl";
import { StyledPaper } from "./styles";

export const SearchBar = () => {
  const intl = useIntl();

  return (
    <StyledPaper component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        fullWidth
        placeholder={`${intl.formatMessage({
          id: "appBar.searchBar.inputLabel",
        })}`}
        inputProps={{ "aria-label": "Search movie" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledPaper>
  );
};
