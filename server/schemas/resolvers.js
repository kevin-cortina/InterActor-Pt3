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
    },
  },

  // add email to login feature?
//   Mutation: {
//     addProfile: async (parent, { username, password }) => {
//       const profile = await Profile.create({ username, password });
//       const token = signToken(profile);

//       return { token, profile };
//     },
//     login: async (parent, { username, password }) => {
//       const profile = await Profile.findOne({ username });

//       if (!profile) {
//         throw new AuthenticationError('No profile with this username found!');
//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect password!');
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },
//   },
};


module.exports = resolvers;
