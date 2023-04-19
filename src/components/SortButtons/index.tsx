import MenuItem from "@mui/material/MenuItem";
import { Props } from "../../conteiners/AppBar";
import { useLangugaeChange } from "../../hooks/useLanguageChange";
import { Box, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useIntl } from "react-intl";

type PropsSortBtns = Omit<Props, "sortedByType" | "onOrderTypeChange">;

export const SortButtons = ({
  sortedByQuery,
  setSortedByQuery,
}: PropsSortBtns) => {
  const intl = useIntl();
  const { sortedByPopularity, sortedByReleaseDate, sortedByRating } =
    useLangugaeChange({ sortedByQuery, setSortedByQuery });

  const handleChange = (event: SelectChangeEvent) => {
    setSortedByQuery(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, mr: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {intl.formatMessage({
            id: "appBar.sortBy",
          })}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortedByQuery}
          label={intl.formatMessage({
            id: "appBar.sortBy",
          })}
          onChange={handleChange}
        >
          <MenuItem value={sortedByPopularity}>{sortedByPopularity}</MenuItem>
          <MenuItem value={sortedByReleaseDate}>{sortedByReleaseDate}</MenuItem>
          <MenuItem value={sortedByRating}>{sortedByRating}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
