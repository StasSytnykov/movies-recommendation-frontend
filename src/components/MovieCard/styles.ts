import { styled } from "@mui/material/styles";
import { Card, CardMedia, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  transition:
    "transform 300ms ease-in-out 0s, box-shadow 500ms ease-in-out 0s, border-radius 500ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "rgba(0, 0, 0, 0.3) 10px 10px 8px 2px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    maxHeight: 150,
    minHeight: 150,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
})) as typeof Link;

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 100,
    minHeight: 150,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "100%",
    minHeight: 330,
    maxHeight: 330,
  },
})) as typeof CardMedia;

const BoxStyles = { position: "relative" };

const ChipStyles = {
  backgroundColor: grey[100],
  opacity: 0.8,
  position: "absolute",
  top: 5,
  right: 5,
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
})) as typeof Typography;

export {
  StyledCard,
  StyledLink,
  StyledCardMedia,
  BoxStyles,
  ChipStyles,
  StyledTypography,
};
