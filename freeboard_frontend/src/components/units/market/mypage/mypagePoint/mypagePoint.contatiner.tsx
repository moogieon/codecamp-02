// @ts-nocheck
import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointUI from "./mypagePoint.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypagePoint.queries";

export const POINT_MENU = [
  { name: "전체내역", active: true, id: "all" },
  { name: "충전내역", active: false, id: "Loading" },
  { name: "구매내역", active: false, id: "Sold" },
  { name: "판매내역", active: false, id: "Bought" },
];
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
    setPointMenu(
      pointMenu.map((data) =>
        data.id === type
          ? { ...data, active: true }
          : { ...data, active: false }
      )
    );

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
