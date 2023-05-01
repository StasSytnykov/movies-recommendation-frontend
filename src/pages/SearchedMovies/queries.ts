import { gql } from "@apollo/client";

export const MOVIES_BY_SEARCH_QUERY = gql`
  query ($page: Int, $searchQuery: String) {
    moviesBySearchQuery(page: $page, searchQuery: $searchQuery) {
      page
      results {
        title
        releaseDate
        posterPath
        id
        rating
        overview
      }
    }
  }
`;
