import { Box, Button } from "@mui/material";
import { useIntl } from "react-intl";
import { SortButtons } from "../SortButtons";
import { SortedBy } from "../../pages/Home";

export interface Props {
  sortedBy: SortedBy;
  setSortedBy(value: SortedBy): void;
}

export const SearchBar = ({ sortedBy, setSortedBy }: Props) => {
  const intl = useIntl();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <SortButtons sortedBy={sortedBy} setSortedBy={setSortedBy} />
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
