import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../src/commons/types/generated/types";

import UsedgoodsWrite from "../../../../../src/components/units/market/write/usedgoodsWrite.container";

export const FETCH_USER_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      images
      pickedCount
      seller {
        _id
        name
      }
      useditemAddress {
        _id
        lat
        lng
        addressDetail
      }
    }
  }
`;
interface IContext {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export const MarketUsedItemEditPageContext = createContext<IContext>({});

export default function EditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USER_ITEM, {
    variables: { useditemId: router.query.market_id },
  });
  console.log("context", data);
  const value = {
    isEdit: true,
    data,
  };
  return (
    <MarketUsedItemEditPageContext.Provider value={value}>
      <UsedgoodsWrite />
    </MarketUsedItemEditPageContext.Provider>
  );
}
