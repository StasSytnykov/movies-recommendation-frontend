import { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import { IMovie } from "../../conteiners/Movies";
import { notify } from "../../utils/notify";

export const MAX_SELECTED_MOVIES = 20;

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const intl = useIntl();

  const onMovieSelect = useCallback(
    (movie: IMovie) => {
      const isAddedMovie = selectedMovies.find(
        (choseMovie) => choseMovie.id === movie.id
      );
      const moviesQuantity = selectedMovies.length;

      if (isAddedMovie) {
        notify(
          intl.formatMessage({
            id: "alert.isAdded",
          })
        );
      } else if (moviesQuantity < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      } else {
        notify(
          intl.formatMessage({
            id: "alert.max",
          })
        );
      }
    },
    [selectedMovies, intl]
  );

  const onMovieDelete = useCallback(
    (id: number) => {
      setSelectedMovies(
        selectedMovies.filter((choseMovie) => choseMovie.id !== id)
      );
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    onMovieSelect,
    onMovieDelete,
  };
};
