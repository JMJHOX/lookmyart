import { gql } from "@apollo/client";

export const PAGINATOR_ART = gql`
  query arts($pageSize: Int! = 10, $PageNumber: Int! = 1) {
    arts(pagination: { pageSize: $pageSize, page: $PageNumber }) {
      data {
        id
        attributes {
          art_bio
          art_name
          image_art {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
