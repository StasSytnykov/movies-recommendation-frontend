import { Box, Typography, CardContent, Card, CardMedia } from "@mui/material";
import { OptionButton } from "../OptionButton";
import { IMovie } from "../MoviesSection";
import { useIntl } from "react-intl";

export interface Props {
  movie: IMovie;
  onMovieDelete: (id: number) => void;
}

export const MovieCardSelected = ({ movie, onMovieDelete }: Props) => {
  const intl = useIntl();

  return (
    <Card sx={{ display: "flex", position: "relative" }}>
      <OptionButton
        titleButton={intl.formatMessage({
          id: "cardMenu.delete",
        })}
        onMovieDelete={() => onMovieDelete(movie.id)}
      />
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", padding: 1 }}>
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
