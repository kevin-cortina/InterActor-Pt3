const { User, Favorite } = require('../models');

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
    }
  }
};

module.exports = resolvers;
