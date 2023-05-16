// @ts-ignore
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import CommentsReplyUI from "./commentsReply.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./commentsReply.queries";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./commentsReplyList/commentsReplyList.queries";

export default function CommentsReplay(props: any) {
  const [contents, setContents] = useState();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: props.data._id,
          // refetchQueries: [
          //   {
          //     query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          //     variables: { useditemId: router.query.market_id },
          //   },
          // ],
        },
        update(cache, _) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (_, { readField }) => {
                return readField;
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: "내용을 작성해 주세요" });
    }
  };

  const onClickUpdateReply = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents },
          useditemQuestionAnswerId: props.ondata._id,
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId: props.ondata._id },
            },
          ],
        },
      });
      setContents(contents);

      props.setIsEdit(false);
    } catch (error) {
      alert("오류");
    }
  };
  return (
    <CommentsReplyUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdateReply={onClickUpdateReply}
      showReplyInput={props.showReplyInput}
      isEdit={props.isEdit}
      contents={contents}
      ondata={props.ondata}
    />
  );
}
