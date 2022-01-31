import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      favorites {
        _id
        title
        releaseDate
      }
    }
  }
`;

export const QUERY_FAVORITES = gql`
  query getFavorites {
    favorites {
      _id
      title
      releaseDate
    }
  }
`;

export const QUERY_SINGLE_FAVORITE = gql`
  query getSingleFavorite($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      title
      releaseDate
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      favorites {
        _id
        title
        releaseDate
      }
    }
  }
`;
