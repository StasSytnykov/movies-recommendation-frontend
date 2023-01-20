import { useState } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { MOVIES_QUERY } from "./queries";
import { useMovies } from "../../hooks";
import { MovieCard } from "../../components";
import { BasicPagination } from "../../components";
import { SelectedMoviesSection } from "../../components";
import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MAX_PAGES = 500;

export interface IMovie {
  id: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
}

export const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectMovie, deleteMovie, selectedMovies } = useMovies();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }} mt={4}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <Box sx={{ flexGrow: 1 }}>
            {loading ? (
              "Loading..."
            ) : (
              <>
                <Paper sx={{ mt: 1 }}>
                  <StyledGrid container spacing={2} sx={{ pt: 0 }}>
                    {data.movies.results.map((movie: IMovie) => (
                      <Grid key={movie.id} sm={4} md={4} lg={3}>
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
                  </StyledGrid>
                  <Box sx={{ p: 1 }}>
                    <BasicPagination
                      totalPages={MAX_PAGES}
                      setPage={setPage}
                      page={page}
                    />
                  </Box>
                </Paper>
              </>
            )}
          </Box>
        </Grid>
        <SelectedMoviesSection
          deleteMovie={deleteMovie}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};
