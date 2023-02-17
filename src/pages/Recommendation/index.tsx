import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS } from "./queries";
import Grid from "@mui/material/Unstable_Grid2";
import { MovieCard } from "../../components";
import { IMovie, StyledGrid } from "../../components/MoviesSection";
import { AppContext } from "../../context";

export const Recommendation = () => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<{
    ids: string[];
    title: string;
  }>({
    ids: [],
    title: "",
  });
  const { loading, error, data } = useQuery(MOVIES_BY_IDS, {
    variables: { ids: params.ids },
  });
  const { contextDispatch } = useContext(AppContext);

  useEffect(() => {
    const ids = searchParams.get("ids");
    const title = searchParams.get("title");
    const language = searchParams.get("language");

    setParams({
      ids: ids ? ids.split(",") : [],
      title: title ? title : "Default title",
    });

    const recommendLocale = language;

    contextDispatch({
      type: "setLocale",
      locale: recommendLocale === "uk" ? recommendLocale : "en-us",
    });
  }, [searchParams, contextDispatch]);

  if (error) return <div>Error</div>;

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
            {params.title}
          </Typography>
          <StyledGrid container spacing={2}>
            {data.moviesByIds.map((movie: IMovie) => (
              <Grid key={movie.id} sm={4} md={3} lg={2}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </StyledGrid>
        </>
      )}
    </>
  );
};
