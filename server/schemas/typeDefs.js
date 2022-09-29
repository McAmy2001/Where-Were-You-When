const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Auth {
        token: ID!
        user: User
    }
    
  type User {
    _id: ID
    username: String
    email: String
    memories: [Memory]
  }

  type Memory {
    _id: ID
    memoryText: String
    username: String
    memoryYear: Number
    memoryMonth: Number
    memoryDate: Number
  }

  type Query {
    me: User
    users: [User]
    memory(memoryMonth: Number!, memoryDate: Number!): Memory
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMemory(memoryText: String!, memoryYear: Number!, memoryMonth: Number!, memoryDate: Number!): Memory
  }

`;


module.exports = typeDefs;