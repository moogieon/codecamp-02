import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      _id
      amount
      balance
      createdAt
      status
    }
  }
`;
