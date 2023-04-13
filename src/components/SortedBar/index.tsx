import { Box, Button } from "@mui/material";
import { useIntl } from "react-intl";
import { SortButtons } from "../SortButtons";
import { SortedByQuery, SortedByType } from "../../pages/Home";

export interface Props {
  sortedByQuery: SortedByQuery;
  setSortedByQuery(value: SortedByQuery): void;
  sortedByType: SortedByType;
  setSortedByType(value: SortedByType): void;
}

export const SearchBar = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  setSortedByType,
}: Props) => {
  const intl = useIntl();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <SortButtons
        sortedByType={sortedByType}
        setSortedByType={setSortedByType}
        sortedByQuery={sortedByQuery}
        setSortedByQuery={setSortedByQuery}
      />
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
