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
          createdAt
          arts{
            
            data{
              id
              attributes{
                art_name
                image_art{
                  data{
                  attributes {
                    url
                  }
                }
                }
              }
            }
          }
          profile_picture{
                data{
                  attributes {
                    url
                  }
                }
              }
          background_profile{
              data{
                attributes {
                  url
                }
              }
            }
        }
      }
    }
  }
`;
