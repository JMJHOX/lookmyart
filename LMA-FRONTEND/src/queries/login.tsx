import { gql } from "@apollo/client";

export const QUERY_LOGIN = gql`
  mutation getUser($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        
      }
    }
  }
`;
