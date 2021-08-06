import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./usedgoodsWrite.validation";
import UsedgoodsWriteUI from "./usedgoodsWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USEFITEM } from "./usedgoodsWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function UsedgoodsWrite() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEFITEM);

  const onClickRegist = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
          },
        },
      });
      console.log(result.data?.createUseditem._id);
      Modal.confirm({
        content: "게시물이 등록 완료!",
        // onOk: () =>
        // router.push(`/market/detail${result.data?.createUseditem._id}`),
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <UsedgoodsWriteUI
      onClickRegist={onClickRegist}
      handleSubmit={handleSubmit}
      register={register}
      errors={formState.errors}
    />
  );
}
