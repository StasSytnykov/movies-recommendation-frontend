import { useQuery } from "@apollo/client";
import { MOVIE_DETAILS } from "./queries";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  return <>{loading ? <div>Loading...</div> : <div>Movie Details</div>}</>;
};
