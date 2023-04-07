import { Box, Button } from "@mui/material";
import { useIntl } from "react-intl";
import { SortButtons } from "../SortButtons";

export const SearchBar = () => {
  const intl = useIntl();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <SortButtons />
      <Button
        type="submit"
        variant="outlined"
        sx={{ ml: "20px", width: "150px" }}
      >
        {intl.formatMessage({
          id: "searchBar.inputBtn",
        })}
      </Button>
    </Box>
  );
};
