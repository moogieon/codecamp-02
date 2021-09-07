import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import UsedGoodsListUI from "./usedgoodsList.presenter";

import { FETCH_USED_ITEMS } from "./usedgoodsList.queries";

export default function UsedGoodsList() {
  const [hasMore, setHasMore] = useState(true);
  const [basket, setBasket] = useState([]);
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    const newDay = getDate(new Date());
    const items = JSON.parse(localStorage.getItem(newDay) || "[]");
    setBasket(items);
  }, []);
  const onClickPost = (Today: any) => () => {
    router.push(`/market/detail/${Today._id}`);
    const newDay = getDate(new Date());
    const Todays = JSON.parse(localStorage.getItem(newDay) || "[]");
    let isExists = false;
    Todays.forEach((data: any) => {
      if (data._id === Today._id) isExists = true;
    });
    if (isExists) return;
    Todays.push(Today);
    localStorage.setItem(getDate(newDay), JSON.stringify(Todays));
    setBasket(Todays);
  };

  // const onClickPost = (Today) => () => {
  //   const Todays = JSON.parse(
  //     localStorage.getItem(getDate(new Date())) || "[]"
  //   );
  //   if (JSON.stringify(Todays).includes(Today._id)) return;

  //   Todays.push(Today);
  //   localStorage.setItem(getDate(new Date()), JSON.stringify(Todays));
  //   setBasket(Todays);
  // };

  const onClickToday = (data: any) => () => {
    router.push(`/market/detail/${data._id}`);
  };

  const onClikWritePage = () => {
    router.push("/market/usedgoods");
  };
  // ------- 무한 스크롤  ------------
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // cache 수정이랑 비슷함  , prev하면 기존에 있던 cache전체 , fetchMoreResult(매게변수) 2페이지
        if (!fetchMoreResult?.fetchUseditems.length) setHasMore(false);
        const fetchUseditems = fetchMoreResult
          ? [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems]
          : [...prev.fetchUseditems];
        return { fetchUseditems };

        // 기존에 배열 10개가 있었을 것 , 배열이니깐 스프레드 시켜서 객체로, 20개짜리(기존 10,새로운 10) 배열로 만들어줌
        // ! type error 때문에 삼항연산자 이용해서 아닐때를 적었지만 원래는 자동으로 되기때문에 안해도 됨
      },
    });
    console.log("good", data?.fetchUseditems);
  };
  return (
    <UsedGoodsListUI
      basket={basket}
      data={data}
      onClickPost={onClickPost}
      onClickToday={onClickToday}
      onClikWritePage={onClikWritePage}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
    />
  );
}
