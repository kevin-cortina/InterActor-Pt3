const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
type Users {
    _id: ID!
    username: String!
    password: String
=======
type User {
    _id: ID!
    username: String!
    password: String!
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
    bio: String
    favorites: [Favorite]
}

type Favorite {
<<<<<<< HEAD
    favoriteId: ID!
=======
    _id: ID!
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
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
type Auth{
    token: ID!,
    user: Users,
}
type Mutation {
    login (username: String!,password: String!): Auth
    addUser(username: String!,password: String!): Auth)
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeUser(username: ID!, password: String!): Auth
    updateUser(username: ID!, password: String!): Auth
  }

`;

module.exports = typeDefs;



// User model from project two for reference

// {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: DataTypes.STRING
//     },
//     password: {
//       type: DataTypes.STRING
//     },
//     bio: {
//       type: DataTypes.STRING
//     },
//     favorites: {
//       type: DataTypes.STRING
//     }
//   },