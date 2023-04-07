import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { useMovies } from "../../hooks";
import { SelectedMoviesSection } from "../../components";
import { MoviesSection } from "../../components/MoviesSection";
import { SearchBar } from "../../components/SortedBar";

export const Home = () => {
  const { onMovieSelect, onMovieDelete, selectedMovies } = useMovies();

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper sx={{ p: 1 }}>
            <SearchBar />
          </Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <MoviesSection onMovieSelect={onMovieSelect} />
        </Grid>
        <SelectedMoviesSection
          onMovieDelete={onMovieDelete}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};
