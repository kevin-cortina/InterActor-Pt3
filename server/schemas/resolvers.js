const { User, Favorite } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('users').populate({
        path: 'users',
        populate: 'favorites'
      });
    },
    favorites: async () => {
      return await Favorite.find({});
    },
  },

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
