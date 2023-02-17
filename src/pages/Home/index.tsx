import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { useMovies } from "../../hooks";
import { SelectedMoviesSection } from "../../components";
import { MoviesSection } from "../../components/MoviesSection";

export const Home = () => {
  const { selectMovie, deleteMovie, selectedMovies } = useMovies();

  return (
    <Box sx={{ flexGrow: 1 }} mt={4}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <MoviesSection selectMovie={selectMovie} />
        </Grid>
        <SelectedMoviesSection
          deleteMovie={deleteMovie}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};
