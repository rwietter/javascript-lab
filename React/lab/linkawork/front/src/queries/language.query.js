import gql from "graphql-tag";
export const GET_LANGUAGE = gql`
  query Language {
    language @client {
      language
      words {
        key
        word
      }
    }
  }
`;
