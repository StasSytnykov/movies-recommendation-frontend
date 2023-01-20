import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query ($page: Int!) {
    movies(take: $page) {
      results {
        posterPath
        id
        releaseDate
        title
      }
      totalPages
      totalResults
      page
    }
  }
`;
