// importing gql
import { gql } from "@apollo/client";

// mutation for user to log in
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// mutation to add a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// mutation to add a new memory
export const ADD_MEMORY = gql`
  mutation addMemory(
    $memoryMonth: Int
    $memoryDate: Int
    $memoryYear: Int!
    $memoryText: String!
  ) {
    addMemory(
      memoryMonth: $memoryMonth
      memoryDate: $memoryDate
      memoryYear: $memoryYear
      memoryText: $memoryText
    ) {
      _id
      username
      memoryMonth
      memoryDate
      memoryYear
      memoryText
    }
  }
`;

// mutation to update/edit a memory
export const UPDATE_MEMORY = gql`
  mutation updateMemory($_id: ID!, $memoryText: String!) {
    updateMemory(_id: $_id, memoryText: $memoryText) {
      _id
      username
      memoryYear
      memoryMonth
      memoryDate
      memoryText
    }
  }
`;

// mutation to delete a memory
export const DELETE_MEMORY = gql`
  mutation deleteMemory($_id: ID!) {
    deleteMemory(_id: $_id) {
      _id
    }
  }
`;
