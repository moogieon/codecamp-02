import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import UsedGoodsListUI from "./usedgoodsList.presenter";

import { FETCH_USED_ITEMS } from "./usedgoodsList.queries";

export default function UsedGoodsList() {
  //   const {startPage,}
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickPost = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/detail/${event.target.id}`);
    console.log(event.target.id);
  };

  const onClikWritePage = () => {
    router.push("/market/usedgoods");
  };
  return (
    <UsedGoodsListUI
      data={data}
      onClickPost={onClickPost}
      onClikWritePage={onClikWritePage}
    />
  );
}
