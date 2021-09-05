import { gql } from "@apollo/client";

export const FETCH_POINT_OF_BUYING = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
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
