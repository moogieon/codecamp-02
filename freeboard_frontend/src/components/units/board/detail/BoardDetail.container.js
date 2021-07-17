import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  BOARD_COMMENT,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export const INPUT_COMMENT = {
  writer: "",
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
  // const [count, setCount] = useState(0)
  // function likeCount() {
  //     setCount(count + 1)
  // }
  // const [count_2, setCount_2] = useState(0)
  // function likeCount_2() {
  //     setCount_2(count_2 + 1)
  // }
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
  function onClickSubmit() {
    const result = createBoardComment({
      variables: {
        boardId: router.query._id,
        createBoardCommentInput: { ...inputs_comment },
      },
    });
    console.log(data);
    console.log(result);
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
    />
  );
}
