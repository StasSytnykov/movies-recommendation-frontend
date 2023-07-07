import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS } from "./queries";
import Grid from "@mui/material/Unstable_Grid2";
import { MovieCard, ErrorPage, Loader } from "../../components";
import { IMovie } from "../../conteiners/Movies";
import { StyledGrid } from "../../conteiners/Movies/styles";
import { AppContext } from "../../context";
import { TypographyStyles } from "./styles";

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
      locale: recommendLocale === "ua" ? recommendLocale : "en-us",
    });
  }, [searchParams, contextDispatch]);

  if (error) return <ErrorPage />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h3" gutterBottom sx={TypographyStyles}>
            {params.title}
          </Typography>
          <StyledGrid container spacing={2}>
            {data.moviesByIds.map((movie: IMovie) => (
              <Grid key={movie.id} sm={4} md={3} lg={2}>
                <MovieCard movie={movie} pageType="recommendation" />
              </Grid>
            ))}
          </StyledGrid>
        </>
      )}
    </>
  );
};
