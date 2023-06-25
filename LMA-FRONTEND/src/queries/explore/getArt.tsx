import { gql } from "@apollo/client";

export const GET_ART = gql`
query getArt($artID: ID!) {
  art(id: $artID) {
    data {
      id
      attributes {
        art_name
        followers
        art_bio
        image_art {
          data {
            attributes {
              url
            }
          }
        }
        author {
          data {
            id
            attributes {
              username
              profile_picture{
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
    }
  }
}

`;
