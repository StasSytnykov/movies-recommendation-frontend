import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  BasicPagination,
  ErrorPage,
  Loader,
  MovieCard,
} from "../../components";
import { SORTED_MOVIES_QUERY } from "./queries";
import { SortedByType } from "../../pages/Home";
import {
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

  const onPaginationClick = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  if (error) return <ErrorPage />;

  return loading ? (
    <Loader />
  ) : (
    <Paper sx={PaperStyles}>
      <StyledGrid container spacing={2}>
        {data.moviesBySortedQuery.results.map((movie: IMovie) => (
          <Grid key={movie.id} sm={3} lg={2.5} sx={GridStyles}>
            <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
          </Grid>
        ))}
      </StyledGrid>
      <Box sx={ThumbPaginationStyles}>
        <BasicPagination onPaginationClick={onPaginationClick} page={page} />
      </Box>
    </Paper>
  );
};
