import CommentsReplyListItem from "./commentsReplyList.presenteritem";

export default function CommentsReplyListUI(props) {
  // console.log("props.ondata", props.ondata);
  return (
    <>
      {props.ondata?.fetchUseditemQuestionAnswers.map((ondata) => (
        <CommentsReplyListItem
          key={ondata._id}
          ondata={ondata}
          loggeddata={props.loggeddata}
        />
      ))}
    </>
  );
}
