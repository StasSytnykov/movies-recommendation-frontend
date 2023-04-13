import { gql } from "@apollo/client";

export const SORTED_MOVIES_QUERY = gql`
  query ($page: Int!, $sortedQuery: String, $sortedType: String) {
    moviesBySortedQuery(
      page: $page
      sortedQuery: $sortedQuery
      sortedType: $sortedType
    ) {
      results {
        posterPath
        id
        releaseDate
        title
        rating
      }
    }
  }
`;
