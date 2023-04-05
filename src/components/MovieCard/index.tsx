import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Chip } from "@mui/material";
import { IMovie } from "../MoviesSection";
import { OptionButton } from "../OptionButton";
import { styled } from "@mui/material/styles";
import { useIntl } from "react-intl";
import { grey } from "@mui/material/colors";

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("sm")]: {
    // maxHeight: 420,
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

const PAGE_TYPE = "recommendation";

export interface Props {
  movie: IMovie;
  onCardSelect?: (movie: IMovie) => void;
  pageType?: string;
}

export const MovieCard = ({ movie, onCardSelect, pageType }: Props) => {
  const intl = useIntl();
  const normalizedGenres =
    pageType === PAGE_TYPE &&
    movie.genres
      .map((genre) => genre.name)
      .splice(0, 2)
      .join(", ");
  return (
    <StyledCard sx={{ position: "relative" }}>
      {pageType === PAGE_TYPE ? null : (
        <OptionButton
          titleButton={intl.formatMessage({
            id: "cardMenu.select",
          })}
          onClickButton={() => onCardSelect && onCardSelect(movie)}
        />
      )}

      <Box sx={{ position: "relative" }}>
        <StyledCardMedia
          component="img"
          image={movie.posterPath}
          alt={movie.title}
        />
        <Chip
          sx={{
            backgroundColor: grey[100],
            opacity: 0.8,
            position: "absolute",
            top: 5,
            right: 5,
          }}
          label={movie.rating}
        />
      </Box>

      <CardContent>
        <StyledTypography variant="h6" component="h3">
          {movie.title}
        </StyledTypography>
        <Typography variant="body2" component="p">
          {movie.releaseDate}
        </Typography>
        {pageType === PAGE_TYPE && (
          <Box>
            <Typography variant="subtitle1" component="p">
              Genres:
            </Typography>
            <StyledTypography variant="body1" component="p">
              {normalizedGenres}
            </StyledTypography>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};
