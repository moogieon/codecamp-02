import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
// import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "../list/usedgoodsCommentsList.queries";
import UsedGoodsCommentsUI from "./usedgoodsCommentsWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./usedgoodsCommentsWrite.queries";
import { IUsedGoodsCommentsWriteProps } from "./usedgoodsCommentsWrite.types";
import { schema } from "./usedgoodsCommentsWrite.validation";

export default function UsedGoodsComments(props: IUsedGoodsCommentsWriteProps) {
  const router = useRouter();
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onClickSubmit = async (data: any) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            ...data,
          },
          useditemId: router.query.market_id,
        },
        update(cache, _) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (_, { readField }) => {
                return readField;
              },
            },
          });
        },
      });
    } catch (errors) {
      alert(errors.message);
    }
  };

  const onClickUpdate = async (data: any) => {
    console.log("props.data._id", props.data._id);
    // return;
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            ...data,
          },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.market_id },
          },
        ],
        // update(cache, { data }) {
        //   const prev = cache.readQuery({
        //     query: FETCH_USEDITEM_QUESTIONS,
        //     variables: { useditemQuestionId: props.data._id },
        //   });
        //   console.log(prev);
        //   cache.writeQuery({
        //     query: FETCH_USEDITEM_QUESTIONS,
        //     variables: { useditemQuestionId: "611f48752d1aa300298e75a0" },
        //     data: {
        //       fetchUseditemQuestions: {
        //         _id: "611f48752d1aa300298e75a0",
        //         __typename: "UsedItem",
        //       },
        //     },
        //   });
        // },
      });
      props.setIsEdit(false);
    } catch (error) {
      alert("오류");
    }
  };
  return (
    <UsedGoodsCommentsUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      error={formState.errors}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
