import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

const ContatinerThumbStyles = { flexGrow: 1 };

const PaperStyles = { mt: 1 };

const StyledGrid = styled(Grid)(({ theme }) => ({
  pt: 0,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const GridStyles = { width: "100%" };

const ThumbPaginationStyles = { p: 1 };

export {
  ContatinerThumbStyles,
  PaperStyles,
  StyledGrid,
  GridStyles,
  ThumbPaginationStyles,
};
