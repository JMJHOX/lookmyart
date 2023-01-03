import { gql } from "@apollo/client";

export const PAGINATOR_ART = gql`
  query arts(
    $pageSize: Int! = 10
    $PageNumber: Int! = 1
    $SearchFilter: String
  ) {
    arts(
      pagination: { pageSize: $pageSize, page: $PageNumber }
      filters: { keywords: { contains: $SearchFilter } }
    ) {
      data {
        id
        attributes {
          art_bio
          art_name
          keywords
          image_art {
            data {
              id
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
