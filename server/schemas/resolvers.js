const { AuthenticationError } = require('apollo-server-express');
const { Users, Favorite } = require('../models');
//const Users = require('../models/User');
const {signToken}=require ("../utils/auth")
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

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};


module.exports = resolvers;
