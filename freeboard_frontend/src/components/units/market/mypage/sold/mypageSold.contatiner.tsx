import { useQuery } from "@apollo/client";
import { useState } from "react";

import MypageSoldUI from "./mypageSold.presenter";

import { FETCH_POINT_OF_SELLING } from "./mypageSold.queries";

export default function MypageSold() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_SELLING);
  console.log("Bought", data);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <MypageSoldUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
