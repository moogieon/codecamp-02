import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      // localStorage.setItem("accessToken", JSON.stringify(accessToken));
      Modal.error({
        content: "로그인이 필요한 페이지입니다.",
      });
      router.push("/market/login");
    }
  }, []);

  // if (!localStorage.getItem("refreshToken")) {
  //   return <></>;
  // }

  return <Component {...props} />;
}; // 이게 자세한 설명 ..

export default withAuth;
