import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { MovieCard } from "../MovieCard";
import { BasicPagination } from "../Pagination/Index";
import { SORTED_MOVIES_QUERY } from "./queries";

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
  rating: number;
  genres: {
    id: number;
    name: string;
  }[];
}

interface Props {
  onMovieSelect: (movie: IMovie) => void;
  sortedBy: "vote_average" | "release_date" | "popularity";
}

export const MoviesSection = ({ onMovieSelect, sortedBy }: Props) => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(SORTED_MOVIES_QUERY, {
    variables: {
      page,
      sortedQuery: sortedBy,
      sortedType: "desc",
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Paper sx={{ mt: 1 }}>
          <StyledGrid container spacing={2} sx={{ pt: 0 }}>
            {error ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Page not found
              </Box>
            ) : (
              data.moviesBySortedQuery.results.map((movie: IMovie) => (
                <Grid key={movie.id} sm={4} lg={3} sx={{ width: "100%" }}>
                  <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
                </Grid>
              ))
            )}
          </StyledGrid>
          <Box sx={{ p: 1 }}>
            <BasicPagination setPage={setPage} page={page} />
          </Box>
        </Paper>
      )}
    </Box>
  );
};
