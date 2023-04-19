import { Box } from "@mui/material";
import { SortButtons } from "../../components";
import { SortedByType } from "../../pages/Home";
import { StyledBox, BoxStylesInBox } from "./styles";
import { SortBtnByOrder } from "../../components";
import { SearchBar } from "../../components";

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
  return (
    <StyledBox>
      <SearchBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={BoxStylesInBox}>
          <SortButtons
            sortedByQuery={sortedByQuery}
            setSortedByQuery={setSortedByQuery}
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
