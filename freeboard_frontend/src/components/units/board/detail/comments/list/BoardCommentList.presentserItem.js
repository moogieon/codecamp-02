import {
  DELETE_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { BoardCommentWrite } from "../write/BoardCommentsWrite.container";
import { getDate } from "../../../../../../commons/libraries/utils";

import {
  Wrapper,
  Wrapper_Head,
  Profile_Img,
  CommentList,
  Comment_Writer,
  Star,
  Comment_Contents,
  Comment_Date,
  Remove,
  Delete,
} from "./BoardCommentList.style";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const deleteBoardComment = useMutation(DELETE_COMMENTS);
  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: { boardCommentId: props.data?._id, password: password },
        refetchQueries: [{ query: FETCH_BOARD_COMMENTS }], refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {  password: password,
                boardCommentId: props.data?._id,},
            refetchQueries: [
                {
                    query:FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.boardId}
                }
            }
            ]
      });

      alert("해당 글을 삭제 합니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <Wrapper>
          {props.data?.fetchBoardComments.map((data) => (
            <Wrapper_Head key={data._id}>
              <Profile_Img src="/boards-image/Profile.png" />
              <CommentList>
                <Comment_Writer>작성자:{data.writer}</Comment_Writer>
                <Star value={data.rating} disabled></Star>
                <Comment_Contents>{data.contents}</Comment_Contents>
                <Comment_Date>{getDate(data.createdAt)}</Comment_Date>
              </CommentList>
              <Remove>수정하기</Remove>
              <Delete id={data._id} onClick={onClickDelete}>
                지우기
              </Delete>
            </Wrapper_Head>
          ))}
        </Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
