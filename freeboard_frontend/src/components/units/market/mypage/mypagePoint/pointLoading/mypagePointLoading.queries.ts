import { gql } from "@apollo/client";

export const FETCH_POINT_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String) {
    fetchPointTransactionsOfLoading(search: $search) {
      _id
      amount
      impUid
      balance
      createdAt
      user {
        _id
        userPoint {
          amount
        }
      }
    }
  }
`;
