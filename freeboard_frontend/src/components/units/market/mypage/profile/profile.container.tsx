import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProfielUI from "./profile.presenter";
import { RESET_USER_PASSWORD } from "./profile.queries";

export default function Profiel() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [password, setPassword] = useState();
  const onClickReset = async () => {
    try {
      await resetUserPassword({
        variables: { password },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <ProfielUI
      onClickReset={onClickReset}
      onChangePassword={onChangePassword}
    />
  );
}
