import { gql } from "@apollo/client";

export const GET_ART = gql`
  query getArt($artID: ID!) {
    art(id: $artID) {
      data {
        id
        attributes {
          art_name
          author {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;
