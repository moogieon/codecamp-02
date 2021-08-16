import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import UsedGoodsCommentsUI from "./usedgoodsCommentsWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./usedgoodsCommentsWrite.queries";
import { schema } from "./usedgoodsCommentsWrite.validation";

export default function UsedGoodsComments(props) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const router = useRouter();
  const onClickSubmit = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            ...data,
          },
          useditemId: router.query.market_id,
        },
      });
    } catch (errors) {
      alert(errors.message);
    }
  };
  return (
    <UsedGoodsCommentsUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      error={formState.error}
      onClickSubmit={onClickSubmit}
    />
  );
}
