import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardMediaStyles = { width: "300px" };

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "start",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
})) as typeof Typography;

const StyledDetail = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
})) as typeof Typography;

const StyledOverview = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.80rem",
  },
})) as typeof Typography;

export {
  CardMediaStyles,
  StyledCard,
  StyledTitle,
  StyledDetail,
  StyledOverview,
};
