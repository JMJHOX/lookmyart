import { gql } from "@apollo/client";

export const SUBMIT_PROFILE = gql`
mutation UserInfo($userId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $userId, data: $data) {
    data {
      id
      attributes {
        username
      }
    }
  }
}
`;
