import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IMovie } from "../MoviesSection";
import { OptionButton } from "../OptionButton";
import { styled } from "@mui/material/styles";
import { useIntl } from "react-intl";

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("sm")]: {
    maxHeight: 420,
  },
}));

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

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
})) as typeof Typography;

export interface Props {
  movie: IMovie;
  onCardSelect?: (movie: IMovie) => void;
  pageType?: string;
}

export const MovieCard = ({
  movie,
  onCardSelect = () => {},
  pageType,
}: Props) => {
  const intl = useIntl();
  return (
    <StyledCard sx={{ position: "relative" }}>
      {pageType === "recommendation" ? null : (
        <OptionButton
          titleButton={intl.formatMessage({
            id: "cardMenu.select",
          })}
          onClickButton={() => onCardSelect(movie)}
        />
      )}

      <StyledCardMedia
        component="img"
        image={movie.posterPath}
        alt={movie.title}
      />
      <CardContent>
        <StyledTypography variant="h6" component="h3">
          {movie.title}
        </StyledTypography>
        <Typography variant="body2" component="p">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
