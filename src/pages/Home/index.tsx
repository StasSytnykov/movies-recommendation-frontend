import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { useMovies } from "../../hooks";
import { SelectedMoviesSection } from "../../components";
import { MoviesSection } from "../../components/MoviesSection";
import { SearchBar } from "../../components/SortedBar";

export type SortedByQuery = "Popularity" | "Release date" | "Rating" | "";
export type SortedByType = "desc" | "asc";

export const Home = () => {
  const [sortedByQuery, setSortedByQuery] = useState<SortedByQuery>("");
  const [sortedByType, setSortedByType] = useState<SortedByType>("desc");
  const { onMovieSelect, onMovieDelete, selectedMovies } = useMovies();
  const stringConverter = (query: SortedByQuery) => {
    switch (query) {
      case "Rating":
        return "vote_average";
      case "Release date":
        return "release_date";
      default:
        return "popularity";
    }
  };

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 4 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper sx={{ p: 1 }}>
            <SearchBar
              sortedByType={sortedByType}
              setSortedByType={setSortedByType}
              sortedByQuery={sortedByQuery}
              setSortedByQuery={setSortedByQuery}
            />
          </Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <MoviesSection
            sortedByQuery={stringConverter(sortedByQuery)}
            sortedByType={sortedByType}
            onMovieSelect={onMovieSelect}
          />
        </Grid>
        <SelectedMoviesSection
          onMovieDelete={onMovieDelete}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};
