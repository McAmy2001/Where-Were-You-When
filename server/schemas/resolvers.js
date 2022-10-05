const { User, Memory } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("memories");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      // find/get all users
      return User.find().select("-__v -password").populate("memories");
    },
    // get/find one user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("memories");
    },
    // get all memories by user's username
    memories: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Memory.find(params).sort({ memoryYear: -1 });
    },
    // get one thought by id
    memory: async (parent, { _id }) => {
      return Memory.findOne({ _id });
    },
    // get all memories for all users
    everyMemory: async () => {
      return Memory.find().select("-__v");
    },
  },
  Mutation: {
    // add user mutation to create a user account
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // log in mutation
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
    // mutation to add a new memory
    addMemory: async (parent, args, context) => {
      if (context.user) {
        const memory = await Memory.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { memories: memory._id } },
          { new: true }
        );

        return memory;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // mutation to update/edit a memory
    updateMemory: async (parent, args, context) => {
      if (context.user) {
        const updatedMemory = await Memory.findByIdAndUpdate(
          args._id,
          { memoryText: args.memoryText },
          { new: true }
        );

        return updatedMemory;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // mutation to delete a memory
    deleteMemory: async (parent, args, context) => {
      if (context.user) {
        const memory = await Memory.findById({
          ...args,
          username: context.user.username,
        });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { memories: memory._id } },
          { new: true }
        );

        const memoryDelete = await Memory.findByIdAndDelete({
          _id: args._id,
        });
        return updatedUser;

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
