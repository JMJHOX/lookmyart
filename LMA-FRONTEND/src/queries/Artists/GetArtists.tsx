import { gql } from "@apollo/client";

export const GET_ARTISTS = gql`
query getArtists(
    $pageSize: Int! = 10
    $PageNumber: Int! = 1
  ) {
    usersPermissionsUsers(
      pagination: { pageSize: $pageSize, page: $PageNumber }
    ) {
      meta{
        pagination{
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          profile_desc
          country
          role_entity
          profile_picture {
            data {
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



