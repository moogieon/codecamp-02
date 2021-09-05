import { useRouter } from "next/router";
import { useState } from "react";
import MyPagesUI from "./mypages01.presenter";

export default function MyPages(props: any) {
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
  const onClickPost = () => {
    router.push("/market/mypage");
  };

  return (
    <MyPagesUI
      onClickProfile={onClickProfile}
      onClickPoint={onClickPoint}
      onClickPost={onClickPost}
      isActive={isActive}
    />
  );
}
