import { gql } from "@apollo/client";
export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      createdAt
      useditem {
        _id
      }
      user {
        _id
        name
      }
    }
  }
`;
