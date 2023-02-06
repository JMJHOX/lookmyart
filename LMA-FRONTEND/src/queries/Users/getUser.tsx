import { gql } from "@apollo/client";

export const QUERY_GET_USERS = gql`
  query UserInfo($userId: ID!) {
    usersPermissionsUser(id: $userId) {
      data {
        id
        attributes {
          username
          country
          email
          contact_number
          website_url
          profile_desc
        }
      }
    }
  }
`;
