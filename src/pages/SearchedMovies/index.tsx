import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_SEARCH_QUERY } from "./queries";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../../hooks";
import { SelectedMoviesSection } from "../../conteiners";
import { SearchBar } from "../../components";
import { Loader } from "../../components";

export const SearchedMovies = () => {
  const [searchParams] = useSearchParams();
  const { loading, error, data } = useQuery(MOVIES_BY_SEARCH_QUERY, {
    variables: {
      page: 1,
      searchQuery: searchParams.get("query"),
    },
  });

  const { onMovieSelect, onMovieDelete, selectedMovies } = useMovies();
  console.log(onMovieSelect);

  if (error) console.log(error);

  console.log(data);

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper sx={{ p: 1 }}>
            <SearchBar />
          </Paper>
        </Grid>
        <Grid xs={12} md={8}>
          {loading ? (
            <Loader />
          ) : (
            <Paper>
              <Grid>movies</Grid>
            </Paper>
          )}
        </Grid>
        <SelectedMoviesSection
          onMovieDelete={onMovieDelete}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};
