// import { useState } from "react";

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, useState } from "react";

import { GlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

import MarketLoginUI from "./marketLogin.presenter";
import { LOGIN_USER } from "./marketLogin.queries";

export const INPUT_LOGIN = {
  email: "",
  password: "",
};
export default function MarketLogin() {
  //   const { loading, setLoading } = useState([]);
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationCreateUserArgs
  >(LOGIN_USER);
  const [input, seInput] = useState(INPUT_LOGIN);
  const [inputError, setInputError] = useState(INPUT_LOGIN);
  const { setAccessToken } = useContext(GlobalContext);
  // const [isOpen, setIsOpen] = useState(false);

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    seInput({ ...input, [event.target.name]: event.target.value });
  }
  async function onClickLogin() {
    setInputError({
      email: input.email ? "" : "e-mail을 입력해 주세요",
      password: input.password ? "" : "password를 입력해 주세요",
    });
    const isEvery = Object.values(input) //! 이게 뭐였지...?
      .every((data) => data);
    if (!isEvery) return;
    try {
      const result = await loginUser({
        variables: {
          ...input,
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
        onOk: () => router.push("/market/login"),
      });
    }
  }
  function onClickSingup() {
    router.push("/market/singup");
  }

  return (
    <MarketLoginUI
      onChangeInput={onChangeInput}
      onClickLogin={onClickLogin}
      inputError={inputError}
      onClickSingup={onClickSingup}
    />
  );
}
