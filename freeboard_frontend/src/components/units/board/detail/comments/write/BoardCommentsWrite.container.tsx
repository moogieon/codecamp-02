import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  BOARD_COMMENT,
  // UPDATE_BOARD_COMMENTS,
} from "./BoardCommentsWrite.queries";

import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentsWriteUI from "./BoardCommentsWrite.presenter";
export const INPUT_COMMENT = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

export default function BoardCommentsWrite(props: any) {
  const router = useRouter();
  console.log(router);
  // console.log(router.query.aaa ) //질문 ,
  const [inputs_comment, setInputs_Comment] = useState(INPUT_COMMENT);

  const [comments_error, setComments_Error] = useState(INPUT_COMMENT);
  const [createBoardComment] = useMutation(BOARD_COMMENT);

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs_Comment({
      ...inputs_comment,
      [event.target.name]: event.target.value,
    });
    setComments_Error({ ...comments_error, [event.target.name]: "" });
    console.log(event.target.name);
  }
  // console.log(data);
  function onChangeStar(value: number) {
    setInputs_Comment({ ...inputs_comment, rating: value });
  }
  async function onClickSubmit() {
    setComments_Error({
      writer: inputs_comment.writer ? "" : "작성자를 입력해주세요",
      password: inputs_comment.password ? "" : "비밀번호를 입력해주세요.",
      contents: inputs_comment.password ? "" : "내용을 입력해주세요.",
      rating: 0,
    });

    const isEvery = Object.values(inputs_comment) //! 이게 뭐였지...?
      .every((data) => data);

    if (!isEvery) return;
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
      setInputs_Comment(INPUT_COMMENT); //! 이게 왜 있는건지 ???
    } catch (error) {}

    // console.log(data);

    // function onClickChange() {}
    // router.push(`/board/detail/${result.data?.createBoard._id}`);
  }

  // ts 에서만 가능한 number js에서는 ?
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENTS);

  // async function onCKilckUpDate(event: any) {
  //   if (!inputs_comment.contents || !inputs_comment.password) {
  //     alert("내용을 모두 입력해 주세요.");
  //     return;
  //   }

  //   try {
  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: {
  //           contents: inputs_comment.contents,
  //           rating: inputs_comment.rating,
  //           password: inputs_comment.password,
  //           boardCommentId: (event.target as Element).id, //! 이게 뭐지 ?
  //         },
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query._id },
  //         },
  //       ],
  //     });
  //     setInputs_Comment(INPUT_COMMENT);
  //     props.setIsEdit?.(false);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <BoardCommentsWriteUI
      isEdit={props.isEdit}
      data={props.data}
      inputs_comment={inputs_comment}
      onChangeStar={onChangeStar}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      // onCKilckUpDate={onCKilckUpDate}
      comments_error={comments_error}

      // onClickChange={onClickChange}
    />
  );
}
