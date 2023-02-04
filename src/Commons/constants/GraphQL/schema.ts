import { gql } from '@apollo/client';

export const UPDATE_INQUIRY = gql`
  mutation createInquiry($input: CreateInquiryInput!) {
    createInquiry(input: $input) {
      id
      name
      address
      content
      remarks
      katakanaName
    }
  }`;

export const GET_INQUIRY = gql`
  query listInquiries {
    listInquiries {
      items {
        id
        name
        address
        content
        remarks
        katakanaName
      }
    }
  }`;

export const UPDATE_GAME = gql`
  mutation createGame {
    createGame(input: { Image: "a", description: "b", title: "c" }) {
      title
      id
      description
      Image
    }
  }`;

export const GET_GAME = gql`
  query listGames {
    listGames {
      items {
        Image
        description
        id
        title
      }
    }
  }`;
