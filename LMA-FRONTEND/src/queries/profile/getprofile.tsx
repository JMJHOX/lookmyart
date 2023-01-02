import { gql } from "@apollo/client";

export const GET_SESSION = gql`
  query userData {
    me {
      id
      email
      username
    }
  }
`;
