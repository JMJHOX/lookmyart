import { gql } from "@apollo/client";

export const SUBMIT_IMAGE = gql`
  mutation query($FormData: Upload!) {
    upload(file: $FormData) {
      data {
        id
      }
    }
  }
`;
