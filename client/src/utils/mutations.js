import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($password: String!) {
    login( password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($title: String!, $releaseDate: String) {
    addFavorite(title: $title, releaseDate: $releaseDate) {
      _id
      title
      releaseDate
      }
    }
`;

export const REMOVE_USER = gql`
  mutation removeUser($user: ID!, $username: String!) {
    removeUser(user: $user, username: $username) {
      user {
          _id
          username
      }
    }
  }
`;
