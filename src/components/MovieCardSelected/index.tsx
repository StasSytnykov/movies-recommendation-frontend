import { Box, Typography, CardContent, Card, CardMedia } from "@mui/material";
import { OptionButton } from "../OptionButton";
import { IMovie } from "../../conteiners/Movies";
import { useIntl } from "react-intl";
import {
  CardStyles,
  CardMediaStyles,
  BoxStyles,
  CardContentStyles,
} from "./styles";

export interface Props {
  movie: IMovie;
  onMovieDelete: (id: number) => void;
}

export const MovieCardSelected = ({ movie, onMovieDelete }: Props) => {
  const intl = useIntl();

  return (
    <Card sx={CardStyles}>
      <OptionButton
        titleButton={intl.formatMessage({
          id: "cardMenu.delete",
        })}
        onMovieDelete={() => onMovieDelete(movie.id)}
      />
      <CardMedia
        component="img"
        sx={CardMediaStyles}
        image={movie.posterPath}
        alt={movie.title}
      />
      <Box sx={BoxStyles}>
        <CardContent sx={CardContentStyles}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography component="div" variant="body2">
            {movie.releaseDate}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
