import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query._id },
  });
  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);
  async function onClickDelete() {
    try {
      const password = prompt("비밀번호를 입력해 주세요.");
      console.log(data);
      // console.log(router.query);

      await deleteBoardComment({
        variables: { boardCommentId: props.data?._id, password: password },
        refetchQueries: [{ query: FETCH_BOARD_COMMENTS }],
      });

      alert("해당 글을 삭제 합니다.");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <BoardCommentListUI onClickDelete={onClickDelete} data={data} />
    </>
  );
}
