<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { Users, Favorite } = require('../models');
//const Users = require('../models/User');
const {signToken}=require ("../utils/auth")
=======
const { User, Favorite } = require('../models');
const { signToken } = require('../utils/auth')

>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
const resolvers = {
  Query: {
    me:async(parent,args,context)=>{
      if(context.user){
        const userData = await User.findOne({_id:context.user._id}).select("-__v -password")
        return userData
      }
      throw new AuthenticationError("user not loggedIn")
    },
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

<<<<<<< HEAD
  Mutation: {
    addUser: async (parent, args) => {
      const profile = await Users.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, {username, password }) => {
      const profile = await Users.findOne({ username });

      if (!profile) {
        throw new AuthenticationError('No profile with this username found!');
      }

      const correctPw = await profile.isCorrectPassword(password);
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
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

<<<<<<< HEAD
      const token = signToken(profile);
      return { token, profile };
=======
      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { username, password, _id }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }
      return User.findOneAndDelete({ user, _id });
>>>>>>> 1ae49d204827240bc4b064734a584c96fd9a0d84
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
