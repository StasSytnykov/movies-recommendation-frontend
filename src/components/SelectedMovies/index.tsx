import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MovieCardSelected } from "../index";
import Grid from "@mui/material/Unstable_Grid2";
import { IMovie } from "../../pages/Home";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ConfirmFilmInput } from "../ConfirmFilmInput";
import { ConfirmModal } from "../index";
import { useContext, useState } from "react";
import { AppContext } from "../../context";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 180px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

interface Props {
  deleteMovie: (id: number) => void;
  selectedMovies: IMovie[];
}

export interface Values {
  listName: string;
}

export const SelectedMoviesSection = ({
  deleteMovie,
  selectedMovies,
}: Props) => {
  const [url, setUrl] = useState("");
  const { locale } = useContext(AppContext);

  const onSubmit = (values: Values) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${window.location.host}/recommend?title=${
      values.listName
    }&ids=${ids.join(",")}&language=${locale}`;
    setUrl(link);
  };

  const onCloseModal = () => {
    setUrl("");
  };
  return (
    <Grid xs={12} md={4}>
      <SelectedMovies>
        <Stack
          spacing={2}
          direction="column"
          sx={{ maxHeight: "88%", overflowY: "auto", marginBottom: 1 }}
        >
          {selectedMovies.map((movie: IMovie) => (
            <Box key={movie.id}>
              <MovieCardSelected
                movie={movie}
                onDeleteMovie={() => deleteMovie(movie.id)}
              />
            </Box>
          ))}
        </Stack>
        <ConfirmFilmInput onSubmit={onSubmit} />
      </SelectedMovies>
      <ConfirmModal open={!!url} url={url} onCloseModal={onCloseModal} />
    </Grid>
  );
};
