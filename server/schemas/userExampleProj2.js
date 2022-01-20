// mongoose dependency
const { schema, model } = require('mongoose')

// serialize and authentication dependency
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Create a new Sequelize model for books
class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

const userSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    bio: {
      type: Number,
      required: false
    },
    favorites: {
      type: Schema.Types.ObjectId,
      ref: 'Favorite'
    }
  }
);

const Users = model('Users', userSchema);

module.exports = Users;


// old code

// const { Model, DataTypes } = require('sequelize');


// Users.init(
//   // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
//   {
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
//   {
//     // Link to database connection
//     sequelize,
//     // Set to false to remove `created_at` and `updated_at` fields
//     timestamps: false,
//     underscored: true,
//     modelName: 'users'
//   }
// );