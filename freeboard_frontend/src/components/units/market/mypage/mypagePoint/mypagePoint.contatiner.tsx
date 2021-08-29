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

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onClickMenu = (e) => {
    const newMenu = { ...pointMenu };
    setPointMenu(newMenu);
    history.pushState("", "", "/mypage/maket/loading");
  };

  return (
    <MypagePointUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      pointMenu={pointMenu}
      onClickMenu={onClickMenu}
    />
  );
}
