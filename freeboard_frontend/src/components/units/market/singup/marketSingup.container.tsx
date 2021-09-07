import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import MarketSingupUI from "./marketSingup.presenter";
import { useForm } from "react-hook-form";
import { schema } from "./marketSingup.validation";
import { CREAT_USER } from "./marketSingup.queries";

export default function MarketSingup() {
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwrodError, setPasswrodError] = useState("");
  const [createUser] = useMutation(CREAT_USER);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  function onChangeConfirmpassword(event: ChangeEvent<HTMLInputElement>) {
    setConfirmpassword(event?.target.value);
    // console.log(event?.target);
  }

  async function onClickSingup(data: any) {
    setPasswrodError(
      confirmpassword !== data.password ? "password를 확인 해주세요." : ""
    );

    if (confirmpassword !== data.password) return;

    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
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
      onChangeConfirmpassword={onChangeConfirmpassword}
      onClickSingup={onClickSingup}
      register={register}
      passwrodError={passwrodError}
      handleSubmit={handleSubmit}
      errors={formState.errors}
    />
  );
}
