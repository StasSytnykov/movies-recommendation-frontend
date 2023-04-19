import { Box } from "@mui/material";
import { ErrorBoxStyles } from "./styles";

export const ErrorPage = () => (
  <Box sx={ErrorBoxStyles}>
    <h1>Oops!</h1>
    <h2>Error 404</h2>
    <p>
      <i>Page not found</i>
    </p>
  </Box>
);
