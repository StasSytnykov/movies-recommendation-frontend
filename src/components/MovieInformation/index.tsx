import { CardMedia, CardContent } from "@mui/material";
import { useIntl } from "react-intl";
import {
  CardMediaStyles,
  StyledCard,
  StyledTitle,
  StyledDetail,
  StyledOverview,
} from "./styles";

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
}

export const MovieInformation = ({ movie }: Props) => {
  const intl = useIntl();
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={movie.posterPath}
        title={movie.title}
        sx={CardMediaStyles}
        loading="lazy"
      />
      <CardContent>
        <StyledTitle gutterBottom variant="h4" component="div">
          {movie.title}
        </StyledTitle>
        <StyledDetail gutterBottom variant="h6" component="div">
          {movie.releaseDate}
        </StyledDetail>
        <StyledDetail gutterBottom variant="h6" component="div">
          {intl.formatMessage({
            id: "movieCard.duration",
          })}
          : {movie.runtime}{" "}
          {intl.formatMessage({
            id: "movieCard.time",
          })}
        </StyledDetail>
        <StyledDetail gutterBottom variant="h6" component="div">
          {intl.formatMessage({
            id: "movieCard.rating",
          })}
          : {movie.rating.toFixed(1)}
        </StyledDetail>
        <StyledOverview variant="body1" color="text.secondary">
          {movie.overview}
        </StyledOverview>
      </CardContent>
    </StyledCard>
  );
};
