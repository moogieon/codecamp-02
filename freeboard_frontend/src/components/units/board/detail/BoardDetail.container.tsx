import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  BOARD_COMMENT,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD_COMMENTS } from "./comments/list/BoardCommentList.queries";
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
  // console.log(data._id);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  function onClickLike() {
    likeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
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

  function onClickMove() {
    router.push("/boards");
  }
  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInput = {
      ...inputs_comment,
      [event.target.name]: event.target.value,
    };
    setInputs_Comment(newInput);
    console.log(event.target.name);
  }
  console.log(data);
  function onChangeStar(value: number) {
    setInputs_Comment({ ...inputs_comment, rating: value });
  }
  // ts 에서만 가능한 number js에서는 ?

  return (
    <BoardDetailUI
      data={data}
      onChangeStar={onChangeStar}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
      onClickEdit={onClickEdit}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      // onClickChange={onClickChange}
    />
  );
}
