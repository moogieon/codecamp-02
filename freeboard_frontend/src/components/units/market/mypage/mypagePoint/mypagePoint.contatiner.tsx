// @ts-nocheck
import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointUI from "./mypagePoint.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypagePoint.queries";

export const POINT_MENU = {
  sold: false,
  bought: false,
  loading: false,
};
// 안에 값을  true로 바꾸는 법 >??
export default function MypagePoint() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_BUYING);
  const [pointMenu, setPointMenu] = useState(POINT_MENU);
  const [transactions, setTransactions] = useState(true);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onClickMenu = (type: string) => () => {
    // setPointMenu(newMenu);
    const newMenu = { ...POINT_MENU };
    newMenu[type] = true;
    setPointMenu(newMenu);
    setTransactions(false);
    // history.pushState("", "", "/mypage/maket/loading");
  };
  const onCilckTransactions = (type: any) => () => {
    setTransactions(true);
    const newMenu = { ...POINT_MENU };
    newMenu[type] = false;
    setPointMenu(newMenu);
  };

  return (
    <MypagePointUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      pointMenu={pointMenu}
      onClickMenu={onClickMenu}
      onCilckTransactions={onCilckTransactions}
      setPointMenu={setPointMenu}
      transactions={transactions}
    />
  );
}
