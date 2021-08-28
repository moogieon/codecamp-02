import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointUI from "./mypagePoint.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypagePoint.queries";

export default function MypagePoint() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_BUYING);
  console.log("Bought", data);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <MypagePointUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
