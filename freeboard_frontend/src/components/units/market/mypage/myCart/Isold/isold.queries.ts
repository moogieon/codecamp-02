import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_SOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
      _id
      name
      price
      createdAt

      buyer {
        _id
      }
    }
  }
`;
