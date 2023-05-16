import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointLoadingUI from "./mypagePointLoading.presenter";

import { FETCH_POINT_OF_LOADING } from "./mypagePointLoading.queries";

export default function MypagePointLoading() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_LOADING);

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <MypagePointLoadingUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
