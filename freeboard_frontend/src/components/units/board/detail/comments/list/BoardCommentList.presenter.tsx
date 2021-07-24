import BoardCommentListUIItem from "./BoardCommentList.presentserItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((data) => (
        <BoardCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
