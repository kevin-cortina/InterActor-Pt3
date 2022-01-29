<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
=======
const { User, Favorite } = require('../models');
>>>>>>> origin
const { signToken } = require('../utils/auth')

const resolvers = {
  //getting the data query
  Query: {
    //context in this section needs to be replaced by a different object
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

<<<<<<< HEAD
  //changing the data
  Mutation: {
    loginUser: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

          if (!user) {
            throw new AuthenticationError('No profile with this email found!');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Wrong CREDS!');
        }
        const token = signToken(user);
        return {token, user};
      },

    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return {token, user}
    },
  }
=======
  // add email to login feature?
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { username, password, _id }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }
      return User.findOneAndDelete({ user, _id });
    },
  },
>>>>>>> origin
};


//removeThought: async (parent, { thoughtId }) => {
//   return Thought.findOneAndDelete({ _id: thoughtId });
// },
// removeComment: async (parent, { thoughtId, commentId }) => {
//   return Thought.findOneAndUpdate(
//     { _id: thoughtId },
//     { $pull: { comments: { _id: commentId } } },
//     { new: true }
//   );
// },
// },
// };


module.exports = resolvers;
