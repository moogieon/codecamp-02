import { BoardCommentListUIItem } from "./BoardCommentList.presentserItem";
export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardCommets.map((data) => (
        <BoardCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
