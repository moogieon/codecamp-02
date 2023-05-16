import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypageBoughtUI from "./mypageBought.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypageBought.queries";

export default function MypageBought() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_BUYING);

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <MypageBoughtUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
