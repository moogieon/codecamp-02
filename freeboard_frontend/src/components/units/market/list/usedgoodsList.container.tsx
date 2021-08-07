import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import UsedGoodsListUI from "./usedgoodsList.presenter";

import { FETCH_USED_ITEMS } from "./usedgoodsList.queries";

export default function UsedGoodsList() {
  //   const {startPage,}
  const { userInfo } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);
  return <UsedGoodsListUI data={data} />;
}
