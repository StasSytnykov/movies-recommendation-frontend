import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginBottom: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    width: 450,
  },
})) as typeof Paper;

export { StyledPaper };
