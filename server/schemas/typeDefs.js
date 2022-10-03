const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    memory: [Memory]
  }
  type Memory {
    _id: ID
    memoryText: String
    username: String
    memoryYear: Int
    memoryMonth: Int
    memoryDate: Int
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
    updateMemory(_id:ID!,
      memoryText: String!): Memory
    deleteMemory(_id: ID!): Memory
  }
`;

module.exports = typeDefs;