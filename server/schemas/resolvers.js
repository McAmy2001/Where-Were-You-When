const { User, Memory } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("memory");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('memory');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('memory');
    },
    memories: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Memory.find(params).sort({ memoryYear: -1 });
    },
    memory: async (parent, { _id }) => {
      return Memory.findOne({ _id });
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addMemory: async (parent, args, context) => {
      if (context.user) {
        const memory = await Memory.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { memory: memory._id } },
          { new: true }
        );

        return memory;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateMemory: async (parent, args, context) => {
      if (context.user) 
      {
        const memory = await Memory.findByIdAndUpdate(
           {_id: context.memory._id},
           {username: context.user._id},
           { $map: { args }}, //can I do this?  doesn't look right
           { new: true },             
      );

      return memory;
      }

      throw new AuthenticationError("You need to be logged in!");
      
    },
    deleteMemory: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {_id: user._id},
          { $pull: { memory: _id }},
          { new: true }
        ).populate('memory');

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
