import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointUI from "./mypagePoint.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypagePoint.queries";

export default function MypagePoint() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_BUYING);
  const [sold, setSold] = useState(false);
  const [bought, setBought] = useState(false);
  const [loading, setLoadding] = useState(false);
  const [transactions, setTransactions] = useState(false);
  console.log("Bought", data);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onClickBought = () => {
    setBought(true);
    setSold(false);
    setTransactions(false);
    setLoadding(false);
    history.pushState("", "", "/mypage/maket/bought");
  };
  const onClickSold = () => {
    setSold(true);
    setBought(false);
    setTransactions(false);
    setLoadding(false);
    history.pushState("", "", "/mypage/sold");
  };
  const onClickTransactions = () => {
    setTransactions(true);
    setSold(false);
    setBought(false);
    setLoadding(false);
    history.pushState("", "", "/mypage/Transactions");
  };
  const onClickLoading = () => {
    setLoadding(true);
    setTransactions(false);
    setSold(false);
    setBought(false);
    history.pushState("", "", "/mypage/pointLoading");
  };

  return (
    <MypagePointUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      sold={sold}
      bought={bought}
      loading={loading}
      transactions={transactions}
      onClickBought={onClickBought}
      onClickSold={onClickSold}
      onClickTransactions={onClickTransactions}
      onClickLoading={onClickLoading}
    />
  );
}
