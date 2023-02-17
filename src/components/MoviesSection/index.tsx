import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { MovieCard } from "../MovieCard";
import { BasicPagination } from "../Pagination/Index";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "../../pages/Home/queries";
import { useState } from "react";
import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export interface IMovie {
  id: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
}

interface Props {
  selectMovie: (movie: IMovie) => void;
}

export const MoviesSection = ({ selectMovie }: Props) => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
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
              <BasicPagination setPage={setPage} page={page} />
            </Box>
          </Paper>
        </>
      )}
    </Box>
  );
};
