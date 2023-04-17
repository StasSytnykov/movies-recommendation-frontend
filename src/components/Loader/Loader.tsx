import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { BoxStyles } from "./styles";

export const Loader = () => (
  <Box sx={BoxStyles}>
    <CircularProgress />
  </Box>
);
