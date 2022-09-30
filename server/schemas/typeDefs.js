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
    memory(memoryMonth: Int!, memoryDate: Int!, memoryYear: Int!): Memory
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMemory(
      memoryText: String!
      memoryYear: Int!
      memoryMonth: Int!
      memoryDate: Int!
    ): Memory
  }
`;

module.exports = typeDefs;
