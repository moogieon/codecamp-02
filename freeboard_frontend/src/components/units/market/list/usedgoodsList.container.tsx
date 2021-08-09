import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import UsedGoodsListUI from "./usedgoodsList.presenter";

import { FETCH_USED_ITEMS } from "./usedgoodsList.queries";

export default function UsedGoodsList() {
  const [basket, setBasket] = useState([]);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickPost = (Today) => () => {
    // router.push(`/market/detail/${Today._id}`);
    const newDay = getDate(new Date());
    const Todays = JSON.parse(localStorage.getItem("newDay") || "[]");
    let isExists = false;
    Todays.forEach((data) => {
      if (data._id === Today._id) isExists = true;
    });
    if (isExists) return;
    Todays.push(Today);
    localStorage.setItem(getDate(newDay), JSON.stringify(Todays));
    setBasket(basket);
  };
  useEffect(() => {
    const Todays = JSON.parse(localStorage.getItem("newDay") || "[]");
    setBasket(Todays);
  });
  const onClickToday = (data) => () => {
    router.push(`/market/detail/${data._id}`);
  };

  const onClikWritePage = () => {
    router.push("/market/usedgoods");
  };
  return (
    <UsedGoodsListUI
      basket={basket}
      data={data}
      onClickPost={onClickPost}
      onClickToday={onClickToday}
      onClikWritePage={onClikWritePage}
    />
  );
}
