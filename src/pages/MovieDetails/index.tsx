import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MOVIE_DETAILS } from "./queries";
import {
  MovieInformation,
  CastInfo,
  Loader,
  ErrorPage,
} from "../../components";
import { BoxStyles } from "./styles";

export const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const [movieId, setMovieId] = useState<string>();
  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: { id: movieId },
    skip: !movieId,
  });

  useEffect(() => {
    const id = searchParams.get("id");
    setMovieId(id ? id : "");
  }, [searchParams]);

  if (error) return <ErrorPage />;

  return loading ? (
    <Loader />
  ) : (
    <Box sx={BoxStyles}>
      {data && (
        <>
          <MovieInformation movie={data.movieById} />
          <CastInfo cast={data.castByMovieId.cast} />
        </>
      )}
    </Box>
  );
};
