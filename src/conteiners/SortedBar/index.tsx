import { Box, Button } from "@mui/material";
import { useIntl } from "react-intl";
import { SortButtons } from "../../components/SortButtons";
import { SortedByType } from "../../pages/Home";
import { BoxStyles, ByttonStyles, BoxStylesInBox } from "./styles";
import { SortBtnByOrder } from "../../components/SortBtnByOrder";

export interface Props {
  sortedByQuery: string;
  setSortedByQuery(value: string): void;
  sortedByType: SortedByType;
  onOrderTypeChange(): void;
}

export const SortedBar = ({
  sortedByQuery,
  setSortedByQuery,
  sortedByType,
  onOrderTypeChange,
}: Props) => {
  const intl = useIntl();

  return (
    <Box sx={BoxStyles}>
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

      <Button type="submit" variant="outlined" sx={ByttonStyles}>
        {intl.formatMessage({
          id: "appBar.searchBar.inputBtn",
        })}
      </Button>
    </Box>
  );
};
