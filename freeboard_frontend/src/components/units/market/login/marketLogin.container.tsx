import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

import MarketLoginUI from "./marketLogin.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./marketLogin.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./maketLogin.validation";
export default function MarketLogin() {
  //   const { loading, setLoading } = useState([]);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationCreateUserArgs
  >(LOGIN_USER);
  const client = useApolloClient();

  const { setAccessToken, setUserInfo, userInfo, accessToken } =
    useContext(GlobalContext);

  async function onClickLogin(data: any) {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`, // 공백이 없으면 안되는 이유 ??
          },
        },
      });
      // console.log(resultUser.data.fetchUserLoggedIn);
      setUserInfo(resultUser.data.fetchUserLoggedIn || "");
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );
      localStorage.setItem("refreshToken", "true");
      localStorage.setItem("userInfo", resultUser.data.fetchUserLoggedIn || "");
      // console.log(result.data?.loginUser.accessToken);
      // console.log("accessToken", accessToken);

      Modal.info({
        content: "로그인 완료",
        onOk: () => router.push("/market/"),
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  }
  function onClickSingup() {
    router.push("/market/singup");
  }

  return (
    <MarketLoginUI
      onClickLogin={onClickLogin}
      onClickSingup={onClickSingup}
      errors={formState.errors}
      register={register}
      handleSubmit={handleSubmit}
      userInfo={userInfo}
    />
  );
}
