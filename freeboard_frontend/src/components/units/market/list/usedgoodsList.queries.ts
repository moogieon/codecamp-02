import { gql } from "@apollo/client";
// ($search: String!, $page: Int)
// (search: $search, page: $page)
export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      seller {
        _id
        name
      }
    }
  }
`;
