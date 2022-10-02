import { gql } from '@apollo/client';

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

export const ADD_MEMORY = gql`
mutation addMemory($memoryText: String!) {
  addMemory(memoryText: $memoryText) {
    _id
    username
    memoryMonth
    memoryDate
    memoryYear
    memoryText
  }
}
`;

export const UPDATE_MEMORY =gql`
  mutation updateMemory($_id: ID!) {
    updateMemory(_id: $ID) {
      _id
      username
      memoryYear
      memoryMonth
      memoryDate
      memoryText
    }
  }
`;

export const DELETE_MEMORY = gql`
  mutation deleteMemory($id: ID!) {
    deleteMemory(id: $id) {
      _id
      username
      memoryYear
      memoryMonth
      memoryDate
      memoryText
    }
  }
`;




