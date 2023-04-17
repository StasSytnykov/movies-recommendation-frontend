import { styled } from "@mui/material/styles";
import { Card, CardMedia, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
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
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "100%",
    maxHeight: 330,
    minHeight: 330,
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
