import { gql } from "@apollo/client";

export const FETCH_POINT_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String) {
    fetchPointTransactionsOfSelling(search: $search) {
      _id
      amount
      balance
      user {
        _id
        userPoint {
          amount
        }
      }
      useditem {
        _id
        name
        soldAt
      }
    }
  }
`;
