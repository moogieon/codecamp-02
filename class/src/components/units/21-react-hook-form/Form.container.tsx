import FormUI from "./Form.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Form.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Form.validation";

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  async function onSubmit(data: any) {
    try {
      await loginUser({
        variables: {
          ...data,
        },
      });
      Modal.info({
        content: "로그인 완료~",
      });
    } catch (error) {
      Modal.error({
        content:"오류"
      });
    }
  }
  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
