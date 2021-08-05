// import { useState } from "react";

import { useMutation } from "@apollo/client";
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
import { LOGIN_USER } from "./marketLogin.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./maketLogin.validation";
export default function MarketLogin() {
  //   const { loading, setLoading } = useState([]);
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationCreateUserArgs
  >(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // formaState
  const { setAccessToken } = useContext(GlobalContext);

  async function onClickLogin(data) {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken || "");
      Modal.success({
        content: "로그인 완료",
        okText: "확인",
      });
    } catch (error) {
      Modal.error({
        content: "로그인 실패죠?",
        okText: "다시 시도",
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
    />
  );
}
