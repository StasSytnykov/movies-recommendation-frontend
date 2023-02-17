import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IMovie } from "../MoviesSection";
import { OptionButton } from "../OptionButton/OptionButton";
import { styled } from "@mui/material/styles";
import { useIntl } from "react-intl";

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    minWidth: 250,
  },
}));

export interface Props {
  movie: IMovie;
  onCardSelect?: (movie: IMovie) => void;
}

export const MovieCard = ({ movie, onCardSelect = () => {} }: Props) => {
  const intl = useIntl();
  return (
    <StyledCard sx={{ maxWidth: 250, maxHeight: 420, position: "relative" }}>
      <OptionButton
        titleButton={intl.formatMessage({
          id: "cardMenu.select",
        })}
        onClickButton={() => onCardSelect(movie)}
      />

      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%", maxHeight: 330, minHeight: 330 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {movie.title}
        </Typography>
        <Typography variant="body2" component="p">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
