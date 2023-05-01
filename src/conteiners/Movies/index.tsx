import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { MovieCard } from "../../components";
import { BasicPagination } from "../../components";
import { SORTED_MOVIES_QUERY } from "./queries";
import { SortedByType } from "../../pages/Home";
import { ErrorPage } from "../../components";
import {
  ContatinerThumbStyles,
  BoxStyles,
  PaperStyles,
  StyledGrid,
  GridStyles,
  ThumbPaginationStyles,
} from "./styles";

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
  sortedByQuery: "vote_average" | "release_date" | "popularity";
  sortedByType: SortedByType;
}

export const Movies = ({
  onMovieSelect,
  sortedByQuery,
  sortedByType,
}: Props) => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(SORTED_MOVIES_QUERY, {
    variables: {
      page,
      sortedQuery: sortedByQuery,
      sortedType: sortedByType,
    },
  });

  const onPageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Box sx={ContatinerThumbStyles}>
      {loading ? (
        <Box sx={BoxStyles}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper sx={PaperStyles}>
          <StyledGrid container spacing={2}>
            {error ? (
              <ErrorPage />
            ) : (
              data.moviesBySortedQuery.results.map((movie: IMovie) => (
                <Grid key={movie.id} sm={4} lg={3} sx={GridStyles}>
                  <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
                </Grid>
              ))
            )}
          </StyledGrid>
          <Box sx={ThumbPaginationStyles}>
            <BasicPagination onPageClick={onPageClick} page={page} />
          </Box>
        </Paper>
      )}
    </Box>
  );
};
