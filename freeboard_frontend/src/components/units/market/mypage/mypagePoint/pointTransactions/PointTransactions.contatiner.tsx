import { useQuery } from "@apollo/client";
import { useState } from "react";
import PointTransactionsUI from "./PointTransactions.presenter";

import { FETCH_POINT_TRANSACTIONS } from "./PointTransactions.queries";

export default function PointTransactions() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_TRANSACTIONS);
  console.log("Bought", data);
  // const [iActive, setIsActive] = useState(false);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  // function ChangeStatus() {
  //   if (data.status === "충전") {
  //     setIsActive(true);
  //   }
  // }

  return (
    <PointTransactionsUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      // iActive={iActive}
      // ChangeStatus={ChangeStatus}
    />
  );
}
