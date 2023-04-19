import { Box, SelectChangeEvent } from "@mui/material";
import { SortButtons } from "../../components";
import { SortedByType } from "../../pages/Home";
import { StyledBox, BoxStylesInBox } from "./styles";
import { SortBtnByOrder } from "../../components";
import { SearchBar } from "../../components";
import { useLangugaeChange } from "../../hooks/useLanguageChange";

export interface Props {
  sortedByQuery: string;
  setSortedByQuery(value: string): void;
  sortedByType: SortedByType;
  onOrderTypeChange(): void;
}

export const AppBar = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  onOrderTypeChange,
}: Props) => {
  const { sortedByPopularity, sortedByReleaseDate, sortedByRating } =
    useLangugaeChange({ sortedByQuery, setSortedByQuery });

  const handleChange = (event: SelectChangeEvent) => {
    setSortedByQuery(event.target.value as string);
  };

  return (
    <StyledBox>
      <SearchBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={BoxStylesInBox}>
          <SortButtons
            sortedByQuery={sortedByQuery}
            handleChange={handleChange}
            sortedByPopularity={sortedByPopularity}
            sortedByReleaseDate={sortedByReleaseDate}
            sortedByRating={sortedByRating}
          />
          <SortBtnByOrder
            sortedByType={sortedByType}
            onOrderTypeChange={onOrderTypeChange}
          />
        </Box>
      </Box>
    </StyledBox>
  );
};
