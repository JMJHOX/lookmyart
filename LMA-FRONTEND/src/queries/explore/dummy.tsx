
import { gql } from "@apollo/client";

export const GET_ARTDUM = gql`
query arts($pageSize: Int! = 10, $PageNumber: Int! = 1, ) {
    item1: arts(
      pagination: { pageSize: $pageSize, page: $PageNumber }
      filters: { keywords: { contains: "react" } }
    ) {
      data {
        id
      }
    }
     item2: arts(
      pagination: { pageSize: $pageSize, page: $PageNumber }
      filters: { keywords: { contains: "cli" } }
    ) {
      data {
        id
      }
    }
  }
  

`;

