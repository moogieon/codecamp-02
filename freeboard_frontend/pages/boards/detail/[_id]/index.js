import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../../src/components/units/board/detail/comments/list/BoardCommentList.container";
export default function DetailPage() {
  // aaa 라도 [aaa] 를 넣으면  Router.push('/detail/1') 해도 1란 숫자를 aaa로 연다는  뜻
  return (
    <>
      <BoardDetail />
      <BoardCommentList />
    </>
  );
}
