const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Users {
    _id: ID!
    username: String!
    password: String
    bio: String
    favorites: [Favorite]
}

type Favorite {
    favoriteId: ID!
    title: String!
    releaseDate: String
}

type Query {
    users: [User]
    favorites: [Favorite]
}
type Auth{
    token: ID!,
    user: Users,
}
type Mutation {
    login (username: String!,password: String!): Auth
    addUser(username: String!,password: String!): Auth)
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