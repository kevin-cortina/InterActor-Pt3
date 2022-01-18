const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID
    username: String
    password: String
    bio: String
    favorites: [Favorite]
}

type Favorite {
    id: ID
    title: String
    releaseDate: String
}

type Query {
    users: [User]
    favorites: [Favorite]
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