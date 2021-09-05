import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_SOLD = gql`
  query fetchUseditemsISold($search: String) {
    fetchUseditemsISold(search: $search) {
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
