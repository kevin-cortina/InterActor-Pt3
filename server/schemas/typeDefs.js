const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    me: User
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

`;

module.exports = typeDefs;