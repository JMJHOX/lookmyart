import { gql } from "@apollo/client";

export const QUERY_REGISTER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
      }
    }
  }
`;
