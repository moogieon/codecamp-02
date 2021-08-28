import { useRouter } from "next/router";
import { useState } from "react";
import MyPagesUI from "./mypages01.presenter";

export default function MyPages() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const onClickPoint = () => {
    router.push("/market/mypage/mypagePoint");

    setIsActive(true);
  };
  const onClickProfile = () => {
    router.push("/market/mypage/profile");

    setIsActive(true);
  };

  return (
    <MyPagesUI
      onClickProfile={onClickProfile}
      onClickPoint={onClickPoint}
      isActive={isActive}
    />
  );
}
