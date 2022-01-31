const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
=======
type User {
    _id: ID!
    username: String!
    password: String!
    bio: String
    favorites: [Favorite]
}

type Favorite {
    _id: ID!
    title: String!
    releaseDate: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    favorites: [Favorite]
    user(username: String!): User
    favoriteByUser(username: String): [Favorite]
    favorite(favoriteId: ID!): Favorite
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeUser(username: ID!, password: String!): Auth
    updateUser(username: ID!, password: String!): Auth
  }

>>>>>>> origin
`;

module.exports = typeDefs;