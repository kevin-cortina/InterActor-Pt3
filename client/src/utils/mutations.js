import { gql } from '@apollo/client';
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation updatePassword($username: String!, $password: String!) {
    updatePassword(username: $username, password: $password) {
      _id
      username
      user
      }
    }
`;
export const REMOVE_USER = gql`
  mutation removeUser( $username: String!, $password: String!) {
    removeUser(username: $username, password: $password) {
      user {
          _id
          username
      }
    }
  }
`;

