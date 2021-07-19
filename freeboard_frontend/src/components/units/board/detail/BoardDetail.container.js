import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  BOARD_COMMENT,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
} from "./comments/list/BoardCommentList.queries";
import BoardCommentListUI from "../detail/comments/list/BoardCommentList.container";
export const INPUT_COMMENT = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

export default function BoardDetail() {
  const router = useRouter();
  console.log(router);
  // console.log(router.query.aaa ) //질문 ,
  const [inputs_comment, setInputs_Comment] = useState(INPUT_COMMENT);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });
  console.log(data);
  const [count, setCount] = useState(LIKE_BOARD);
  function likeCount() {
    setCount(LIKE_BOARD);
  }
  const [count_2, setCount_2] = useState(LIKE_BOARD);
  function likeCount_2() {
    setCount_2(LIKE_BOARD);
  }
  function onChangeInputs(event) {
    const newInput = {
      ...inputs_comment,
      [event.target.name]: event.target.value,
    };
    setInputs_Comment(newInput);
    console.log(event.target.name);
  }
  console.log(data);

  function onClickMove() {
    router.push("/boards");
  }
  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query._id } });
      alert("삭제 완료");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
    console.log(data);
  }
  function onClickEdit() {
    router.push(`/boards/detail/${router.query._id}/edit`);
  }
  async function onClickSubmit() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query._id,
          createBoardCommentInput: { ...inputs_comment },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      alert("등록 완료");
    } catch (error) {}

    // console.log(data);

    // function onClickChange() {}
    // router.push(`/board/detail/${result.data?.createBoard._id}`);
  }
  return (
    <BoardDetailUI
      onData={data}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
      onClickEdit={onClickEdit}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      likeCount={likeCount}
      likeCount_2={likeCount_2}
      // onClickChange={onClickChange}
    />
  );
}
