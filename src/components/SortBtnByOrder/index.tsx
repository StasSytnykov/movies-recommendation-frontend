import { Tooltip, Button } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { useIntl } from "react-intl";

import { SortedByType } from "../../pages/Home";

interface Props {
  onOrderTypeChange(): void;
  sortedByType: SortedByType;
}

export const SortBtnByOrder = ({ sortedByType, onOrderTypeChange }: Props) => {
  const intl = useIntl();

  return (
    <Tooltip
      title={
        sortedByType === "desc"
          ? intl.formatMessage({
              id: "appBar.tooltip.desc",
            })
          : intl.formatMessage({
              id: "appBar.tooltip.asc",
            })
      }
    >
      <Button variant="contained" size="small" onClick={onOrderTypeChange}>
        <SouthIcon sx={{ opacity: sortedByType === "desc" ? 1 : 0.5 }} />
        <NorthIcon sx={{ opacity: sortedByType === "asc" ? 1 : 0.5 }} />
      </Button>
    </Tooltip>
  );
};
