import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import MarketSingupUI from "./marketSingup.presenter";
import { CREAT_USER } from "./marketSingup.queries";

export const INPUT_USER = {
  name: "",
  email: "",
  password: "",
};
export default function MarketSingup() {
  const [input, setInput] = useState(INPUT_USER);
  const [confirmpassword, setConfirmpassword] = useState("");
  const [createUser] = useMutation(CREAT_USER);
  const [inputError, setInputError] = useState(INPUT_USER);
  const [passwrodError, setPasswrodError] = useState("");
  const router = useRouter();

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  function onChangeConfirmpassword(event: ChangeEvent<HTMLInputElement>) {
    setConfirmpassword(event?.target.value);
    // console.log(event?.target);
  }

  async function onClickSingup() {
    console.log(input);
    setInputError({
      name: input.name ? "" : "name을 입력해 주세요",
      email: input.email ? "" : "e-mail을 입력해 주세요",
      password: input.password ? "" : "password를 입력해 주세요",
    });
    setPasswrodError(
      confirmpassword !== input.password ? "password를 확인 해주세요." : ""
    );

    const isEvery = Object.values(input).every((data) => data);

    if (!isEvery && confirmpassword !== input.password) return;

    try {
      await createUser({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      Modal.confirm({
        content: "good!",
        okText: "login now",
        onOk: () => router.push("/market/login"),
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  }

  return (
    <MarketSingupUI
      onChangeInput={onChangeInput}
      onChangeConfirmpassword={onChangeConfirmpassword}
      onClickSingup={onClickSingup}
      inputError={inputError}
      passwrodError={passwrodError}
    />
  );
}
