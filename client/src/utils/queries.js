// imports gql
import { gql } from "@apollo/client";

// query to get all memories for a user
export const QUERY_MEMORIES = gql`
  query memories($username: String) {
    memories(username: $username) {
      _id
      memoryText
      username
      memoryYear
      memoryMonth
      memoryDate
    }
  }
`;

// query to get a single memory
export const QUERY_MEMORY = gql`
  query memory($id: ID!) {
    memory(_id: $id) {
      _id
      memoryText
      username
      memoryYear
      memoryMonth
      memoryDate
    }
  }
`;

// query to get all memories for all users
export const QUERY_EVERYMEMORY = gql`
  {
    everyMemory {
      _id
      username
      memoryText
      memoryYear
      memoryMonth
      memoryDate
    }
  }
`;

// query to get user information
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      memories {
        _id
        memoryText
        memoryYear
        memoryMonth
        memoryDate
      }
    }
  }
`;

// query to get current user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      memories {
        _id
        memoryMonth
        memoryDate
        memoryYear
        memoryText
      }
    }
  }
`;

// query to get current user without memories data
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
// query to get all users
export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
    }
  }
`;
