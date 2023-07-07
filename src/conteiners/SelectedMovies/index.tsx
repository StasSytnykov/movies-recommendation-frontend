import { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
  MovieCardSelected,
  ShareModal,
  ConfirmFilmInput,
} from "../../components";
import { AppContext } from "../../context";
import { SelectedMovies, StackStyles, BoxStyles } from "./styles";
import { IMovie } from "../Movies";

interface Props {
  onMovieDelete: (id: number) => void;
  selectedMovies: IMovie[];
}

export interface Values {
  listName: string;
}

export const SelectedMoviesSection = ({
  onMovieDelete,
  selectedMovies,
}: Props) => {
  const [url, setUrl] = useState("");
  const { locale } = useContext(AppContext);

  const onSubmit = (values: Values) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `/recommend?title=${values.listName}&ids=${ids.join(
      ","
    )}&language=${locale}`;
    setUrl(link);
  };

  const onCloseModal = () => {
    setUrl("");
  };

  return (
    <Grid xs={12} md={4}>
      <SelectedMovies>
        <Stack direction="column" sx={StackStyles}>
          {selectedMovies.map((movie: IMovie) => (
            <Box key={movie.id} sx={BoxStyles}>
              <MovieCardSelected
                movie={movie}
                onMovieDelete={() => onMovieDelete(movie.id)}
              />
            </Box>
          ))}
        </Stack>
        <ConfirmFilmInput onSubmit={onSubmit} />
      </SelectedMovies>
      <ShareModal open={!!url} url={url} onCloseModal={onCloseModal} />
    </Grid>
  );
};
