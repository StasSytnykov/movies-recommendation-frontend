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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "start",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
})) as typeof Typography;

const StyledDetail = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
})) as typeof Typography;

const StyledOverview = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.80rem",
  },
})) as typeof Typography;
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
        <StyledTitle gutterBottom variant="h4" component="div">
          {movie.title}
        </StyledTitle>
        <StyledDetail gutterBottom variant="h6" component="div">
          {movie.releaseDate}
        </StyledDetail>
        <StyledDetail gutterBottom variant="h6" component="div">
          Тривалість: {movie.runtime} хв
        </StyledDetail>
        <StyledDetail gutterBottom variant="h6" component="div">
          Рейтинг: {movie.rating}
        </StyledDetail>
        <StyledOverview variant="body1" color="text.secondary">
          {movie.overview}
        </StyledOverview>
      </CardContent>
    </StyledCard>
  );
};
