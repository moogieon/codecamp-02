import CommentsReplyListItem from "./commentsReplyList.presenteritem";

export default function CommentsReplyListUI(props: any) {
  // console.log("props.ondata", props.ondata);
  return (
    <>
      {props.ondata?.fetchUseditemQuestionAnswers.map((ondata: any) => (
        <CommentsReplyListItem
          key={ondata._id}
          ondata={ondata}
          loggeddata={props.loggeddata}
        />
      ))}
    </>
  );
}
