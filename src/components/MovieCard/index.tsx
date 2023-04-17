import { Box, Chip, CardContent, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import { IMovie } from "../../conteiners/Movies";
import { OptionButton } from "../OptionButton";
import {
  StyledCard,
  StyledLink,
  StyledCardMedia,
  BoxStyles,
  ChipStyles,
  StyledTypography,
} from "./styles";

const PAGE_TYPE = "recommendation";

export interface Props {
  movie: IMovie;
  onMovieSelect?: (movie: IMovie) => void;
  pageType?: string;
}

export const MovieCard = ({ movie, onMovieSelect, pageType }: Props) => {
  const intl = useIntl();
  const normalizedGenres =
    pageType === PAGE_TYPE &&
    movie.genres
      .map((genre) => genre.name)
      .splice(0, 2)
      .join(", ");
  return (
    <StyledCard>
      {pageType === PAGE_TYPE ? null : (
        <OptionButton
          titleButton={intl.formatMessage({
            id: "cardMenu.select",
          })}
          onMovieSelect={() => onMovieSelect && onMovieSelect(movie)}
        />
      )}
      <StyledLink to={`movie-details?id=${movie.id}`} component={RouterLink}>
        <Box sx={BoxStyles}>
          <StyledCardMedia
            component="img"
            image={movie.posterPath}
            alt={movie.title}
          />
          <Chip sx={ChipStyles} label={movie.rating.toFixed(1)} />
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
                {intl.formatMessage({
                  id: "movieCard.genres",
                })}
                :
              </Typography>
              <StyledTypography variant="body1" component="p">
                {normalizedGenres}
              </StyledTypography>
            </Box>
          )}
        </CardContent>
      </StyledLink>
    </StyledCard>
  );
};
