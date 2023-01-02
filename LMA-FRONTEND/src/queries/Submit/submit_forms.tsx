import { gql } from "@apollo/client";

export const SUBMIT_ART = gql`
  mutation query(
    $ImageId: ID!
    $author_id: ID!
    $art_name: String!
    $art_bio: String!
  ) {
    createArt(
      data: {
        image_art: $ImageId
        author: $author_id
        art_name: $art_name
        art_bio: $art_bio
      }
    ) {
      data {
        id
      }
    }
  }
`;
