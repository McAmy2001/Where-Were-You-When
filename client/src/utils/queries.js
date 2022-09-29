import { gql } from '@apollo/client';

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

export const QUERY_ME = gql`
  {
    me {
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
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;