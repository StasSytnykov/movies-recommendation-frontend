import { Box, Button } from "@mui/material";
import { useIntl } from "react-intl";
import { SortButtons } from "../SortButtons";
import { SortedByType } from "../../pages/Home";
import { BoxStyles, ByttonStyles } from "./styles";

export interface Props {
  sortedByQuery: string;
  setSortedByQuery(value: string): void;
  sortedByType: SortedByType;
  onOrderTypeChange(): void;
}

export const SearchBar = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  onOrderTypeChange,
}: Props) => {
  const intl = useIntl();

  return (
    <Box sx={BoxStyles}>
      <SortButtons
        sortedByType={sortedByType}
        onOrderTypeChange={onOrderTypeChange}
        sortedByQuery={sortedByQuery}
        setSortedByQuery={setSortedByQuery}
      />
      <Button type="submit" variant="outlined" sx={ByttonStyles}>
        {intl.formatMessage({
          id: "appBar.searchBar.inputBtn",
        })}
      </Button>
    </Box>
  );
};
