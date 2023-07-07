import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

const PaperStyles = { mt: 1 };

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: 20,
  gap: 20,
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const GridStyles = { width: "100%", padding: 0 };

const ThumbPaginationStyles = { p: 1 };

export { PaperStyles, StyledGrid, GridStyles, ThumbPaginationStyles };
