// mongoose
const { Schema, model } = require('mongoose')

// authentication and encryption
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
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

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Users = model('Users', userSchema);

module.exports = Users;





// old code

// const { Model, DataTypes } = require('sequelize');

// Create a new Sequelize model for books
// class Users extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

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