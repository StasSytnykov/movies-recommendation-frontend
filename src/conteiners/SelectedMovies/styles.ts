import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 190px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StackStyles = { maxHeight: "88%", overflowY: "auto", marginBottom: 1 };

const BoxStyles = { p: 1 };

export { SelectedMovies, StackStyles, BoxStyles };
