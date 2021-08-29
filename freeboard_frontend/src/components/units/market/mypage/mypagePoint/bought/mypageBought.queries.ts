import { gql } from "@apollo/client";

export const FETCH_POINT_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
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
// export const FETCH_USEDITEM_IBOUGHT = gql`
//   query fetchUseditemsIBought {
//     fetchUseditemsIBought {
//       _id
//       name

//       soldAt

//       seller {
//         name
//       }
//     }
//   }
// `;
