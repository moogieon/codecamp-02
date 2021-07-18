import {
  Wrapper,
  Wrapper_Head,
  Profile_Img,
  CommentList,
  Comment_Writer,
  Comment_Contents,
  Comment_Date,
  Remove,
  Delete,
} from "./BoardCommentList.style";
export default function BoardCommentListUI(props) {
  return (
    <>
      <Wrapper>
        {props.data?.fetchBoardComments.map((data) => (
          <Wrapper_Head key={data._id}>
            <Profile_Img src="/boards-image/Profile.png" />
            <CommentList>
              <Comment_Writer>작성자:{data.writer}</Comment_Writer>
              <Comment_Contents>{data.contents}</Comment_Contents>
              <Comment_Date>{data.createdAt}</Comment_Date>
            </CommentList>
            <Remove>수정하기</Remove>
            <Delete id={data._id} onClick={props.onClickDelete}>
              지우기
            </Delete>
          </Wrapper_Head>
        ))}
      </Wrapper>
    </>
  );
}
