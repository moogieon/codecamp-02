import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentsReplyUI from "./commentsReply.container";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./commentsReply.queries";

export default function CommentsReplay(props) {
  const [contents, setContents] = useState();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
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
        },
      });
    } catch (error) {}
  };
  return (
    <CommentsReplyUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      showReplyInput={props.showReplyInput}
    />
  );
}
