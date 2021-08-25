import { useRouter } from "next/router";
import { useState } from "react";
import MyPagesUI from "./mypages01.presenter";

export default function MyPages() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const onClickPoint = () => {
    router.push("/market/mypage/pointTransactions");

    setIsActive(true);
  };

  return <MyPagesUI onClickPoint={onClickPoint} isActive={isActive} />;
}
