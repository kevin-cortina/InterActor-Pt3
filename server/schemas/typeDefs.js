const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    bio: String
    password: Password
}
type Password {
    _id: ID!
    password: String!
    user: User
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: [User]
    users: [User]
    user(username: String!): User
}
type Mutation {
    addUser(username: String!, password: String!, email: String): Auth
    login(username: String!, password: String!, email: String): Auth
    removeUser(username: String!, password: String!): Auth
    updatePassword(username: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;