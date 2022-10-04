const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    memories: [Memory]
  }

  type Memory {
    _id: ID
    username: String
    memoryMonth: Int
    memoryDate: Int
    memoryYear: Int
    memoryText: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    memories(username: String): [Memory]
    memory(_id:ID!): Memory
    everyMemory: [Memory]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMemory(
      memoryMonth: Int,
      memoryDate: Int,
      memoryYear: Int,
      memoryText: String!,
    ): Memory
    updateMemory(_id: ID!, memoryText: String!): Memory
    deleteMemory(_id: ID!): Memory
  }
`;

module.exports = typeDefs;