const { Profile } = require('../models');
const {signToken} = require("../utils/auth");
const {AuthenticationError} = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({_id: context.user._id});
      }
      throw new AuthenticationError('Cannot find a user with this id!');
    },

    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const user = await Profile.create({username, email, password});
      const token = signToken(user);
      return {token, user};
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    login: async (parent, {email, password}) => {
      const user = await Profile.findOne({email});

      if (!user) {
        throw new AuthenticationError('Wrong email or password');
      }

      const verifiedPassword = await user.isCorrectPassword(password);

      if (!verifiedPassword) {
        throw new AuthenticationError('Wrong email or password');
      }

      const token = signToken(user);
      return {token, user};
    },
    addPost: async (parent, args, context, {post}) => {
      const updatedUser = await Profile.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: {userPosts: post}},
          {new: true}
      );
      return updatedUser;
    },
    removePost: async (parent, args, context) => {
      const updatedUser = await Profile.findOneAndUpdate(
          {_id: context.user-_id},
          {$pull: {usePosts: {_id: args.postId}}},
          {new: true}
      );
      return updatedUser;
    }
  },
};

module.exports = resolvers;
