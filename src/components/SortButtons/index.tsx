import MenuItem from "@mui/material/MenuItem";
import { Props } from "../../conteiners/AppBar";
import { Box, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useIntl } from "react-intl";

type PropsSortBtns = Pick<Props, "sortedByQuery">;

interface ISortButtons extends PropsSortBtns {
  sortedByPopularity: string;
  sortedByReleaseDate: string;
  sortedByRating: string;
  handleChange(event: SelectChangeEvent): void;
}

export const SortButtons = ({
  sortedByQuery,
  handleChange,
  sortedByPopularity,
  sortedByRating,
  sortedByReleaseDate,
}: ISortButtons) => {
  const intl = useIntl();
  return (
    <Box sx={{ minWidth: 120, mr: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {intl.formatMessage({
            id: "appBar.sortBy",
          })}
        </InputLabel>
        <Select
          sx={{ width: "170px" }}
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
