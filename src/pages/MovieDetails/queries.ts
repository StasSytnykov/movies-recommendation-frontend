import { gql } from "@apollo/client";

export const MOVIE_DETAILS = gql`
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
    castByMovieId(id: $id) {
      cast {
        name
        id
        character
        profilePath
      }
      id
    }
  }
`;
