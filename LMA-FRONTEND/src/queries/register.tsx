import { gql } from "@apollo/client";

export const QUERY_REGISTER = gql`
  mutation addUser($email: String!, $password: String!) {
    register(
      input: { username: "default", email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
      }
    }
  }
`;
