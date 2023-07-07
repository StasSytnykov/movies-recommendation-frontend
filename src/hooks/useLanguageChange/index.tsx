import React, { useContext } from "react";
import { AppContext } from "../../context";
import { Props } from "../../conteiners/AppBar";

const SORTED_BY_POPULARITY = "Popularity";
const SORTED_BY_RELEASE_DATE = "Release date";
const SORTED_BY_RATING = "Rating";
const SORTED_BY_POPULARITY_UA = "популярністю";
const SORTED_BY_RELEASE_DATE_UA = "датою виходу";
const SORTED_BY_RATING_UA = "рейтингом";

type UseLanguageChange = Omit<Props, "sortedByType" | "onOrderTypeChange">;

export const useLanguageChange = ({
  sortedByQuery,
  setSortedByQuery,
}: UseLanguageChange) => {
  const { locale } = useContext(AppContext);

  const sortedByPopularity =
    locale === "ua" ? SORTED_BY_POPULARITY_UA : SORTED_BY_POPULARITY;
  const sortedByReleaseDate =
    locale === "ua" ? SORTED_BY_RELEASE_DATE_UA : SORTED_BY_RELEASE_DATE;
  const sortedByRating =
    locale === "ua" ? SORTED_BY_RATING_UA : SORTED_BY_RATING;

  React.useEffect(() => {
    if (SORTED_BY_POPULARITY_UA === sortedByQuery && locale === "en-us") {
      setSortedByQuery(SORTED_BY_POPULARITY);
    }
    if (SORTED_BY_POPULARITY === sortedByQuery && locale === "ua") {
      setSortedByQuery(SORTED_BY_POPULARITY_UA);
    }
    if (SORTED_BY_RELEASE_DATE_UA === sortedByQuery && locale === "en-us") {
      setSortedByQuery(SORTED_BY_RELEASE_DATE);
    }
    if (SORTED_BY_RELEASE_DATE === sortedByQuery && locale === "ua") {
      setSortedByQuery(SORTED_BY_RELEASE_DATE_UA);
    }
    if (SORTED_BY_RATING_UA === sortedByQuery && locale === "en-us") {
      setSortedByQuery(SORTED_BY_RATING);
    }
    if (SORTED_BY_RATING === sortedByQuery && locale === "ua") {
      setSortedByQuery(SORTED_BY_RATING_UA);
    }
  }, [locale, setSortedByQuery, sortedByQuery]);

  return { sortedByPopularity, sortedByReleaseDate, sortedByRating };
};
