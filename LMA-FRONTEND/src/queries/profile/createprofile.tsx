import { gql } from "@apollo/client";

export const QUERY_CREATE_PROFILE = gql`mutation createProfile($userId: ID!, $username: String!) {
  createProfile(data: { userId: $userId, username: $username }) {
    data {
      id
      attributes {
        createdAt
      }
    }
  }
}
`