import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  mutation getUser($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        profile
      }
    }
  }
`;
