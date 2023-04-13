import { LOCALES } from "../../../context/defaultContext";

export const en = {
  [LOCALES.ENGLISH]: {
    cardMenu: {
      delete: "Delete",
      select: "Select",
    },
    movieCard: {
      genres: "Genres",
      duration: "Duration",
      time: "min",
      rating: "Rating",
      cast: "Cast",
    },
    headerTab: { settings: "Settings", recommend: "Movies recommendation" },
    appBar: {
      searchBar: { inputLabel: "Search movies", inputBtn: "Search" },
      tooltip: { asc: "Ascending order", desc: "Descending order" },
      sortBy: "Sort by",
    },
    input: { placeholder: "Name your movies list", message: "Required" },
    modal: {
      title: "Your link for sharing movies",
      copied: "Link copied!",
    },
    alert: { max: "Maximum movies is 20", isAdded: "This movie already added" },
  },
};
