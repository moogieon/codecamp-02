import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypageCartUI from "./mypageCart.presenter";

import { FETCH_POINT_OF_BUYING } from "./mypageCart.queries";

export const POINT_MENU = {
  sold: false,
  bought: false,
  loading: false,
};
// 안에 값을  true로 바꾸는 법 >??
export default function MypageCart() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_POINT_OF_BUYING);
  const [pointMenu, setPointMenu] = useState(POINT_MENU);

  // const {sold,setSold}=useState(false)
  // const {loading,setLoading}=useState(false)
  // const {solboughtd,setBought}=useState(false)

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onClickMenu = () => {
    const newMenu = { ...pointMenu };
    setPointMenu(newMenu);

    history.pushState("", "", "/mypage/maket/loading");
  };

  return (
    <MypageCartUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      pointMenu={pointMenu}
      onClickMenu={onClickMenu}
    />
  );
}
