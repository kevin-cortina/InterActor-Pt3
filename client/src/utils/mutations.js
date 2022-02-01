import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String) {
    addUser(username: $username, password: $password, email: $email) {
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
  mutation removeUser( $username: String!, $password: String!) {
    removeUser(username: $username, password: $passwor) {
      user {
          _id
          username
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
mutation updatePassword($username: String!, $password: String!) {
  updatePassword(username:$username, password: $password) {
    user {
      username
      _id
    }
  }
`;
