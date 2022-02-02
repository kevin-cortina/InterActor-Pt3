const { User, Password } = require('../models');
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require("apollo-server-express")

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

  // add email to login feature?
  Mutation: {
    addUser: async (parent, { email, username, password }) => {
      const user = await User.create({ email, username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email, password });

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

    updatePassword: async (parent, { user, username, password }) => {
      return await User.findOneAndUpdate(
        { username },
        { password },
        { new: true }
      );
    },

    removeUser: async (parent, { username, password, _id }) => {
      const user = await User.findOne({ username, _id });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }
      return User.findOneAndDelete({ user, _id });
    },
  },
};

// export const deleteUser = {
//   type: UserType,
//   args: {
//     name { type: GraphWLString}
//   }
// }

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
