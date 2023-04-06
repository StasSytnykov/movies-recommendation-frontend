import { gql } from "@apollo/client";

export const MOVIE_BY_ID = gql`
  query ($id: String!) {
    movieById(id: $id) {
      title
      releaseDate
      posterPath
      id
      rating
      overview
      runtime
      genres {
        id
        name
      }
    }
  }
`;
