import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { useMovies } from "../../hooks";
import { SelectedMoviesSection } from "../../components";
import { Movies } from "../../conteiners/Movies";
import { SearchBar } from "../../components/SortedBar";
import { BoxStyles, PaperStyles } from "./styles";

export type SortedByType = "desc" | "asc";

export const Home = () => {
  const [sortedByQuery, setSortedByQuery] = useState<string>("");

  const [sortedByType, setSortedByType] = useState<SortedByType>("desc");
  const { onMovieSelect, onMovieDelete, selectedMovies } = useMovies();
  const stringConverter = (query: string) => {
    switch (query) {
      case "Rating":
        return "vote_average";
      case "Release date":
        return "release_date";
      case "рейтингом":
        return "vote_average";
      case "датою виходу":
        return "release_date";
      default:
        return "popularity";
    }
  };

  const onOrderTypeChange = () => {
    switch (sortedByType) {
      case "desc":
        setSortedByType("asc");
        break;

      default:
        setSortedByType("desc");
        break;
    }
  };

  return (
    <Box sx={BoxStyles}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper sx={PaperStyles}>
            <SearchBar
              sortedByType={sortedByType}
              onOrderTypeChange={onOrderTypeChange}
              sortedByQuery={sortedByQuery}
              setSortedByQuery={setSortedByQuery}
            />
          </Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <Movies
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
