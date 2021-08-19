import { useQuery } from "@apollo/client";
import { useState } from "react";
import CommentsReplay from "../commentsReply.presenter";
import CommentsReplyListUI from "./commentsReplyList.presenter";

import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./commentsReplyList.queries";

export default function CommentsReplyList(props) {
  const [isEdit, setIsEdit] = useState(false);
  const { data: ondata } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
  // console.log("data", ondata);
  // console.log("data !!", props.data._id);
  // console.log("ondata", ondata?.fetchUseditemQuestionAnswers);
  return (
    <>
      <CommentsReplyListUI ondata={ondata} loggeddata={props.loggeddata} />
    </>
  );
}
