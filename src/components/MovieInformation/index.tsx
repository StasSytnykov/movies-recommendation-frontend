import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

type Cast = {
  name: string;
  id: number;
  character: string;
  profilePath: string;
};

interface Props {
  movie: {
    title: string;
    posterPath: string;
    releaseDate: string;
    id: number;
    overview: string;
    runtime: number;
    rating: number;
  };
  cast: Cast[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
export const MovieInformation = ({ movie, cast }: Props) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={movie.posterPath}
        title={movie.title}
        sx={{ width: "300px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {movie.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {movie.releaseDate}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Тривалість: {movie.runtime} хв
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Рейтинг: {movie.rating}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
