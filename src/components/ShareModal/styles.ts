import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BoxStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 300,
  },
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

const IconButtonStyles = { position: "absolute", top: 5, right: 5 };

const PaperStyles = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: "100%",
};

const InputBaseStyles = { ml: 1, flex: 1 };

const DividerStyles = { height: 28, m: 0.5 };

const IconButtonShareStyles = { p: "10px" };

export {
  BoxStyles,
  StyledBox,
  IconButtonStyles,
  PaperStyles,
  InputBaseStyles,
  DividerStyles,
  IconButtonShareStyles,
};
