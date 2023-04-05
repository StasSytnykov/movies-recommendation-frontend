import { gql } from "@apollo/client";

export const MOVIES_BY_IDS = gql`
  query ($ids: [String!]!) {
    moviesByIds(ids: $ids) {
      title
      releaseDate
      posterPath
      id
      rating
      genres {
        id
        name
      }
    }
  }
`;
