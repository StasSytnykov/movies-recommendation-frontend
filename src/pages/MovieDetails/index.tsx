import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MOVIE_DETAILS } from "./queries";
import { MovieInformation } from "../../components/MovieInformation";
import { CastInfo } from "../../components/Cast";

export const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const [movieId, setMovieId] = useState<string>();
  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: { id: movieId },
  });

  useEffect(() => {
    const id = searchParams.get("id");
    setMovieId(id ? id : "");
  }, [searchParams]);

  if (error) return <div>Error</div>;

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box sx={{ marginTop: "25px" }}>
          <MovieInformation movie={data.movieById} />
          <CastInfo cast={data.castByMovieId.cast} />
        </Box>
      )}
    </>
  );
};
