import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const BoxStylesInBox = { display: "flex" };

export { StyledBox, BoxStylesInBox };
